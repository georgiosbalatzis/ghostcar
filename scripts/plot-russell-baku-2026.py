"""Offline article figures; requires numpy and matplotlib in a separate Python environment."""
import csv
import json
from datetime import datetime
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap, TwoSlopeNorm
import numpy as np

ROOT = Path(__file__).resolve().parents[1] / "docs/analysis/russell-baku-2026"
A = json.loads((ROOT / "analysis.json").read_text())
FIGURES = ROOT / "figures"
FIGURES.mkdir(exist_ok=True)
S = np.array([p["distance"] for p in A["grid"]])
GAIN = np.array([p["gain"] for p in A["grid"]])
TIMES = [np.array([p[key] for p in A["grid"]]) for key in ("first", "third")]
LENGTH = A["geometry"]["length"]
XY = np.array(A["geometry"]["xy"])
PATH_S = np.array(A["geometry"]["sampleDistances"])
T16, T20 = [e["distance"] for e in A["exits"]]
PAPER, INK, MUTED, GREEN, RED, BLUE = "#f4f1e9", "#242823", "#696e69", "#14764a", "#c6403c", "#285d91"
plt.rcParams.update({
    "font.family": "DejaVu Sans", "font.size": 11, "figure.facecolor": PAPER,
    "axes.facecolor": PAPER, "axes.edgecolor": "#b6b8ae", "axes.labelcolor": INK,
    "text.color": INK, "xtick.color": MUTED, "ytick.color": MUTED,
    "axes.spines.top": False, "axes.spines.right": False,
    "svg.fonttype": "path", "savefig.facecolor": PAPER,
})


def at(s):
    return np.interp(s, S, GAIN)


def point(s):
    return np.array([np.interp(s, PATH_S, XY[:, k]) for k in range(2)])


def heading(fig, letter, title, subtitle):
    fig.text(.06, .958, f"F1 STORIES  /  DATA DESK                         BAKU 2026 · Q3  /  {letter}",
             color=MUTED, fontsize=10, weight="bold")
    fig.text(.06, .903, title, fontsize=25, weight="bold")
    fig.text(.06, .868, subtitle, fontsize=11, color=MUTED)


def save(fig, name, note):
    fig.text(.06, .045, note, fontsize=9, color=MUTED, va="bottom", linespacing=1.5)
    for suffix in ("svg", "png"):
        fig.savefig(FIGURES / f"{name}.{suffix}", dpi=300,
                    metadata={"Title": name, "Description": note} if suffix == "svg" else None)
    plt.close(fig)


def telemetry_value(index, distance, field):
    """Interpolate measured numeric channels only inside observed timestamp coverage."""
    tel = A["telemetry"][index]
    seconds = np.interp(distance, S, TIMES[index])
    tt = np.array([r["elapsed"] for r in tel])
    if seconds < tt[0] or seconds > tt[-1]:
        return None
    k = int(np.searchsorted(tt, seconds))
    if k > 0 and tt[k] - tt[k - 1] > 2:
        return None
    values = [r[field] for r in tel]
    if any(v is None for v in values):
        return None
    if field in ("brake", "drs", "n_gear"):
        return values[max(0, k - 1)]
    return float(np.interp(seconds, tt, values))


def project(q):
    v = XY[1:] - XY[:-1]
    lengths = np.linalg.norm(v, axis=1)
    u = np.clip(np.sum((q - XY[:-1]) * v, axis=1) / lengths**2, 0, 1)
    foot = XY[:-1] + u[:, None] * v
    residual = np.linalg.norm(foot - q, axis=1)
    k = int(residual.argmin())
    return PATH_S[k] + u[k] * lengths[k], residual[k], v[k] / lengths[k]


def timestamp(value):
    return datetime.fromisoformat(value).timestamp()


def traffic_analysis():
    """Same-time positions; require bracketing samples <=1.2s, <15m lateral residual,
    forward heading cosine >0.8, and a preceding car within 1000m. No tow causal model."""
    output = []
    for lap in A["selected"]:
        rows = json.loads((ROOT / f"raw/traffic-lap-{lap['lap_number']}.json").read_text())
        by_driver = {}
        for row in rows:
            by_driver.setdefault(row["driver_number"], []).append(row)
        arrays = {}
        for number, samples in by_driver.items():
            t = np.array([timestamp(r["date"]) for r in samples])
            assert np.all(np.diff(t) > 0), "Traffic timestamps not monotonic"
            arrays[number] = (samples, t)
        found = {}
        for own in by_driver[63]:
            own_distance, _, _ = project(np.array([own["x"], own["y"]]) / 10)
            if own_distance < T16:
                continue
            when = timestamp(own["date"])
            for number, (samples, t) in arrays.items():
                if number == 63:
                    continue
                j = int(np.searchsorted(t, when))
                if j == 0 or j == len(t) or t[j] - t[j - 1] > 1.2:
                    continue
                q0 = np.array([samples[j - 1]["x"], samples[j - 1]["y"]]) / 10
                q1 = np.array([samples[j]["x"], samples[j]["y"]]) / 10
                q = q0 + (when - t[j - 1]) / (t[j] - t[j - 1]) * (q1 - q0)
                distance, residual, direction = project(q)
                cosine = np.dot(direction, q1 - q0) / max(np.linalg.norm(q1 - q0), 1e-9)
                ahead = (distance - own_distance) % LENGTH
                if residual < 15 and cosine > .8 and 0 < ahead < 1000:
                    found.setdefault(number, []).append({"date": own["date"], "distance": float(own_distance),
                        "ahead_m": float(ahead), "lateral_m": float(residual)})
        summary = []
        for number, observations in found.items():
            gaps = np.array([r["ahead_m"] for r in observations])
            straight = [r for r in observations if r["distance"] >= T20]
            summary.append({"driver_number": number, "observations": observations,
                "min_m": float(gaps.min()), "median_m": float(np.median(gaps)), "max_m": float(gaps.max()),
                "straight_min_m": min((r["ahead_m"] for r in straight), default=None),
                "straight_max_m": max((r["ahead_m"] for r in straight), default=None)})
        output.append({"lap": lap["lap_number"], "cars": summary})
    return output


# Numerical diagnostics and CSVs accompany the figures, not just a rendered result.
progression = []
for distance in [T16, 4300, 4500, 4750, T20, 5250, 5500, 5750, 5900]:
    row = {"distance_m": float(distance), "gain_s": float(at(distance)),
           "gain_since_T16_s": float(at(distance) - at(T16))}
    for i, name in enumerate(("first", "third")):
        for field in ("speed", "throttle", "brake", "n_gear", "drs"):
            row[f"{name}_{field}"] = telemetry_value(i, distance, field)
    progression.append(row)
with (ROOT / "straight-telemetry.csv").open("w") as f:
    writer = csv.DictWriter(f, fieldnames=list(progression[0]))
    writer.writeheader()
    writer.writerows(progression)
centres = np.linspace(100, LENGTH - 100, 1001)
window_gains = at(centres + 100) - at(centres - 100)
k = int(window_gains.argmax())
largest = {"window_m": 200, "start_m": float(centres[k] - 100), "end_m": float(centres[k] + 100),
           "gain_s": float(window_gains[k])}
corner_phases = []
for corner in A["corners"]:
    s = corner["distance"]
    corner_phases.append({"corner": corner["number"], "approach_m": s - 100, "marker_m": s, "exit_proxy_m": s + 50,
        "approach_to_marker_gain_s": float(at(s) - at(s - 100)), "marker_to_exit_gain_s": float(at(s + 50) - at(s)),
        "speeds_at_marker": [telemetry_value(i, s, "speed") for i in range(2)]})
acceleration = []
for start in np.arange(4200, LENGTH - 200, 200):
    values = []
    for i in range(2):
        elapsed = np.interp(start + 200, S, TIMES[i]) - np.interp(start, S, TIMES[i])
        values.append((telemetry_value(i, start + 200, "speed") - telemetry_value(i, start, "speed")) / 3.6 / elapsed)
    acceleration.append({"start_m": float(start), "end_m": float(start + 200), "mean_acceleration_m_s2": values})
diagnostics = {"largest_200m_gain": largest, "traffic": traffic_analysis(), "corner_phases": corner_phases,
               "acceleration": acceleration, "progression": progression,
               "speed_max_final": [max(r["speed"] for r in tel if r["distance"] >= T16) for tel in A["telemetry"]]}
(ROOT / "diagnostics.json").write_text(json.dumps(diagnostics, indent=2) + "\n")

# A — Shared ground-plane geometry. Colour is incremental gain per 200m, never team colour.
fig = plt.figure(figsize=(14, 10))
heading(fig, "A", "RUSSELL: ΠΟΥ ΒΡΗΚΕ ΤΑ 1,187 s", "1η γρήγορη προσπάθεια · L21 1:43.713  →  3η προσπάθεια · L25 1:42.526")
ax = fig.add_axes([.06, .20, .64, .61])
ax.set_aspect("equal")
ax.axis("off")
# Rotation improves the map's fit while preserving one coordinate frame for everything.
angle = np.deg2rad(-24)
rotation = np.array([[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]])
def display(points):
    return np.asarray(points) @ rotation.T
map_xy = display(XY)
ax.plot(map_xy[:, 0], map_xy[:, 1], color="#d4d4c9", lw=13, solid_capstyle="round")
edges = np.append(np.arange(0, LENGTH, 200), LENGTH)
local_gains = at(edges[1:]) - at(edges[:-1])
cmap = LinearSegmentedColormap.from_list("gain", [RED, "#aeb2aa", GREEN])
norm = TwoSlopeNorm(vmin=-.25, vcenter=0, vmax=.25)
for start, end, local_gain in zip(edges[:-1], edges[1:], local_gains):
    ss = np.r_[start, PATH_S[(PATH_S > start) & (PATH_S < end)], end]
    pp = display(np.array([point(s) for s in ss]))
    color = "#aeb2aa" if abs(local_gain) < .020 else cmap(norm(local_gain))
    ax.plot(pp[:, 0], pp[:, 1], lw=7.5, color=color, solid_capstyle="round")
offsets = {1:(27, 0),2:(25,18),3:(15,24),4:(27,-5),5:(15,27),6:(20,-20),7:(-22,-20),
           8:(-3,32),9:(-22,43),10:(-43,35),11:(-58,16),12:(-30,-18),13:(-10,25),14:(-25,0),
           15:(-24,-13),16:(-18,-28),17:(23,-5),18:(22,-4),19:(-25,0),20:(-10,25)}
for corner in A["corners"]:
    q = display(point(corner["distance"]))
    number = corner["number"]
    ax.annotate(str(number), q, xytext=offsets[number], textcoords="offset points", fontsize=10,
                ha="center", va="center", arrowprops={"arrowstyle":"-", "color":"#a1a69a", "lw":.6},
                bbox={"facecolor":PAPER,"edgecolor":"none","pad":1})
for s, label in zip(A["sectorDistances"], ("S1 / S2", "S2 / S3")):
    q = display(point(s))
    ax.scatter(*q, marker="D", s=48, color=BLUE, zorder=5)
    ax.annotate(label, q, xytext=(20, 30) if label == "S1 / S2" else (-65,-24), textcoords="offset points", color=BLUE, fontsize=9,
                bbox={"facecolor":PAPER,"edgecolor":"none","pad":2})
for s, label in ((T16,"T16 έξοδος*"),(T20,"T20 έξοδος*"),(0,"START / FINISH")):
    q = display(point(s));ax.scatter(*q, color=INK, s=35, zorder=6)
    ax.annotate(label, q, xytext=(12, -30 if s == 0 else 12), textcoords="offset points", fontsize=9, weight="bold",
                bbox={"facecolor":PAPER,"edgecolor":"none","pad":2})
start_point = point(0)
tangent = point(30) - start_point
normal = np.array([-tangent[1], tangent[0]]) / np.linalg.norm(tangent)
line = display(np.array([start_point - normal * 22, start_point + normal * 22]))
ax.plot(line[:,0], line[:,1], color=INK, lw=2, zorder=8)
for s in (1000,4500):
    ax.annotate("", display(point(s+50)), xytext=display(point(s)),
                arrowprops={"arrowstyle":"->","color":INK,"lw":1.2})
for s, text, offset in [(450,"Εκκίνηση → έξοδος T2*\n+0,503 s",(-125,65)),
                        (3300,"T12* → T14*\n+0,218 s",(-20,60))]:
    q=display(point(s));ax.annotate(text,q,xytext=offset,textcoords="offset points",fontsize=11,weight="bold",
        arrowprops={"arrowstyle":"-","color":MUTED},bbox={"facecolor":PAPER,"edgecolor":"none","pad":4})
ax.margins(.13, .22)
side = fig.add_axes([.74, .25, .22, .56]);side.axis("off")
side.text(0, .98, "ΚΕΡΔΟΣ ΑΝΑ ΤΟΜΕΑ", fontsize=10, color=MUTED, weight="bold")
for y, sector, value in zip((.86,.70,.54),(1,2,3),A["officialSectorGains"]):
    side.text(0,y,f"S{sector}   +{value:.3f} s".replace(".",","), fontsize=20,weight="bold")
    side.text(0,y-.06,f"{100*value/A['totalGain']:.1f}% του συνόλου".replace(".",","),color=MUTED)
side.text(0,.30,"ΤΕΛΙΚΟ ΓΡΗΓΟΡΟ ΤΜΗΜΑ",fontsize=10,color=MUTED,weight="bold")
side.text(0,.21,"T16* → finish   ≈ +0,121 s",fontsize=12,weight="bold")
side.text(0,.13,"T20* → finish   ≈ +0,067 s",fontsize=12,weight="bold")
side.text(0,-.03,"Τα δύο διαστήματα επικαλύπτονται.\nΟι ετικέτες είναι επιμέρους κέρδη,\nόχι σωρευτική διαφορά.",fontsize=10,color=MUTED,linespacing=1.7)
cax=fig.add_axes([.12,.145,.48,.018]);cb=fig.colorbar(plt.cm.ScalarMappable(norm=norm,cmap=cmap),cax=cax,orientation="horizontal",extend="both")
cb.solids.set_rasterized(False)
cb.set_ticks([-.25,-.1,0,.1,.25]);cb.set_label("Τοπικό κέρδος 3ης προσπάθειας [s / τμήμα 200 m] · γκρι: |κέρδος| < 0,020 s",fontsize=9)
save(fig,"A-circuit-gain", "OpenF1 · session 11373 · Russell #63 · θετικό/πράσινο = κερδίζει η 3η προσπάθεια, κόκκινο = χάνει.\n"
     "* Προσεγγιστική έξοδος: παλαιότερος δείκτης στροφής +50 m. Μικρές τοπικές μεταβολές επηρεάζονται από τη δειγματοληψία θέσης.")

# B — Running gain, official timing checkpoints and explicitly anchored finish.
fig=plt.figure(figsize=(14,8.5))
heading(fig,"B","ΤΟ ΜΕΓΑΛΥΤΕΡΟ ΚΕΡΔΟΣ ΗΡΘΕ ΝΩΡΙΣ", "gain(s) = χρόνος 1ης προσπάθειας − χρόνος 3ης · θετικό = ταχύτερη 3η προσπάθεια")
ax=fig.add_axes([.08,.22,.85,.57])
ax.axvspan(T16,LENGTH,color=GREEN,alpha=.07)
ax.axvspan(T20,LENGTH,color=BLUE,alpha=.08)
ax.plot(S,GAIN,color=GREEN,lw=1.8,label="Διαφορά από κοινή χωρική αναφορά")
ax.axhline(0,color=MUTED,lw=.8)
official=np.cumsum(A["officialSectorGains"])
ax.scatter([*A["sectorDistances"],LENGTH],official,marker="D",s=45,color=INK,zorder=6,label="Επίσημος χρονισμός")
for d,label,value in zip(A["sectorDistances"],("S1","S2"),official):
    ax.axvline(d,color=MUTED,ls=":",lw=1)
    ax.text(d-35,.06,f"{label}\n+{value:.3f} s",ha="right",fontsize=10)
for d,label,y in [(T16,"T16 έξοδος*",.25),(T20,"T20 έξοδος*",.15)]:
    ax.axvline(d,color=BLUE,ls="--",lw=.9);ax.text(d+30,y,label,color=BLUE,fontsize=10,rotation=90)
ax.annotate("+1,187 s\nτερματισμός",(LENGTH,A["totalGain"]),xytext=(-70,-52),textcoords="offset points",weight="bold",fontsize=12,
    arrowprops={"arrowstyle":"-","color":INK})
ax.text(250,.98,"S1 + S2: 0,985 s\n83,0% της συνολικής βελτίωσης",fontsize=14,weight="bold",bbox={"facecolor":PAPER,"edgecolor":"none","pad":5})
ax.set(xlim=(0,LENGTH+60),ylim=(-.10,1.40),xlabel="Απόσταση πάνω στην κοινή τροχιά αναφοράς [m]",ylabel="Σωρευτικό κέρδος 3ης προσπάθειας [s]")
ax.grid(axis="y",alpha=.2);ax.legend(loc="lower left",frameon=False,fontsize=10)
save(fig,"B-cumulative-gain","OpenF1 · L21 1:43.713 / L25 1:42.526 · κοινή τροχιά ≈5.961 m, χωρίς ανακλιμάκωση στο ονομαστικό μήκος πίστας.\n"
     "Σταθερή διόρθωση ρολογιού θέσης L21: +0,0176 s. Έλεγχοι τομέων: ±0,020 s (όριο 0,100 s). Αρχή/τέλος αγκυρώνονται στον επίσημο χρόνο.\n"
     "* Όρια εξόδων κατά προσέγγιση. Οι μικρές αιχμές, ιδίως κοντά στον τερματισμό, δεν τεκμηριώνουν επιμέρους οδηγικό συμβάν.")

# C — The actual measured telemetry samples, on the same distance axis; missing DRS is labelled.
fig=plt.figure(figsize=(14,11))
heading(fig,"C","ΤΕΛΙΚΟ ΤΜΗΜΑ: ΜΙΚΡΟ, ΜΕΤΡΗΣΙΜΟ ΚΕΡΔΟΣ", "Russell εναντίον Russell · T16 έξοδος* → τερματισμός · χωρίς διαθέσιμα δεδομένα DRS")
gs=fig.add_gridspec(4,1,left=.08,right=.93,bottom=.20,top=.79,height_ratios=[3,1.6,1,1],hspace=.14)
axes=[fig.add_subplot(gs[i]) for i in range(4)]
colors=[BLUE,INK];styles=[(0,(5,3)),"-"]
for i,tel in enumerate(A["telemetry"]):
    rows=[r for r in tel if r["distance"]>=T16-25]
    xx=[r["distance"] for r in rows]
    axes[0].plot(xx,[r["speed"] for r in rows],color=colors[i],ls=styles[i],lw=2,
        label=["1η προσπάθεια · L21 · 1:43.713","3η προσπάθεια / pole · L25 · 1:42.526"][i])
    axes[2].step(xx,[r["throttle"] for r in rows],where="post",color=colors[i],ls=styles[i],lw=1.5)
    axes[3].step(xx,[1 if r["brake"]>0 else 0 for r in rows],where="post",color=colors[i],ls=styles[i],lw=1.5)
mask=S>=T16
axes[1].plot(S[mask],GAIN[mask]-at(T16),color=GREEN,lw=1.8)
axes[1].axhline(0,color=MUTED,lw=.7)
axes[1].scatter([LENGTH],[A["exits"][0]["gain"]],color=GREEN,s=35,zorder=5)
axes[1].annotate("≈ +0,121 s τελικά",(LENGTH,A["exits"][0]["gain"]),xytext=(-140,-23),textcoords="offset points",color=GREEN,weight="bold")
axes[0].text(.03,.1,"Μέγιστη καταγεγραμμένη ταχύτητα: 327 → 331 km/h",transform=axes[0].transAxes,fontsize=12,weight="bold")
axes[0].set_ylabel("Ταχύτητα [km/h]");axes[0].legend(loc="lower right",frameon=False,fontsize=10)
axes[1].set_ylabel("Κέρδος από T16* [s]")
axes[2].set(ylabel="Γκάζι [%]",ylim=(75,105),yticks=[80,100])
axes[3].set(ylabel="Φρένο",ylim=(-.1,1.1),yticks=[0,1],yticklabels=["off","on"])
for ax in axes:
    ax.set_xlim(T16,LENGTH)
    ax.axvline(T20,color=MUTED,ls="--",lw=1)
    ax.grid(axis="y",alpha=.2)
    if ax!=axes[-1]: ax.tick_params(labelbottom=False)
axes[0].text(T20+20,190,"T20 έξοδος*",fontsize=10,color=MUTED,rotation=90)
axes[-1].set_xlabel("Απόσταση πάνω στην κοινή τροχιά αναφοράς [m]")
save(fig,"C-final-run-telemetry", "OpenF1 · μεγαλύτερη ταχύτητα στην pole: +4 km/h στο μέγιστο · DRS: όλα τα δείγματα null, δεν απεικονίζεται ως off.\n"
     "* Δείκτης στροφής +50 m. Ευαισθησία ορίου +0..100 m: T16→finish 0,091–0,221 s · T20→finish 0,006–0,098 s.\n"
     "Η θέση αγκυρώνεται στον επίσημο τερματισμό· η εκεί μεταβολή του delta δεν αποδίδεται σε lift ή φρενάρισμα. Το tow παραμένει πιθανή εξήγηση.")
print(json.dumps({"figures":str(FIGURES),"largest":largest,"traffic":[{"lap":r['lap'],"cars":[{k:v for k,v in c.items() if k!='observations'} for c in r['cars']]} for r in diagnostics['traffic']],"progression":progression},indent=2))
