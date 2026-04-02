import { useEffect, useRef, useMemo, memo } from "react";
import { lerp, norm } from "../helpers.js";
import { getF1 } from "../theme.js";

const MiniMap = memo(function MM({ tp, l1, l2, prog, c1, c2, size = 150, flip = false }) {
  const F1 = getF1();
  const ref = useRef(null);
  const nn1 = useMemo(() => l1 ? norm(l1, flip) : null, [l1, flip]);
  const nn2 = useMemo(() => l2 ? norm(l2, flip) : null, [l2, flip]);
  useEffect(() => {
    const c = ref.current; if (!c || !tp?.length) return; const ctx = c.getContext("2d"), s = c.width, pad = 14;
    ctx.clearRect(0, 0, s, s); ctx.fillStyle = F1.overlay; ctx.beginPath(); ctx.moveTo(8,0); ctx.lineTo(s-8,0); ctx.quadraticCurveTo(s,0,s,8); ctx.lineTo(s,s-8); ctx.quadraticCurveTo(s,s,s-8,s); ctx.lineTo(8,s); ctx.quadraticCurveTo(0,s,0,s-8); ctx.lineTo(0,8); ctx.quadraticCurveTo(0,0,8,0); ctx.fill();
    let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
    for (const p of tp) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
    const range = Math.max(mxX - mnX, mxZ - mnZ) || 1;
    const proj = (p) => ({ x: pad + ((p.x - mnX) / range) * (s - pad * 2), y: pad + ((p.z - mnZ) / range) * (s - pad * 2) });
    ctx.strokeStyle = "rgba(225,6,0,0.22)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); });
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); });
    ctx.closePath();
    ctx.stroke();
    const start = proj(tp[0]);
    ctx.save();
    ctx.translate(start.x, start.y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    function dot(data, color) {
      const pts = data?.length >= 2 ? data : tp;
      const pt = lerp(pts, prog);
      const pp = proj(pt);
      ctx.fillStyle = `${color}44`;
      ctx.beginPath();
      ctx.arc(pp.x, pp.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(pp.x, pp.y, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    dot(nn1, c1); dot(nn2, c2);
  }, [F1.overlay, tp, prog, nn1, nn2, c1, c2, size]);
  return <canvas ref={ref} width={size} height={size} style={{ width: size, height: size, borderRadius: 8 }} />;
});

export default MiniMap;
