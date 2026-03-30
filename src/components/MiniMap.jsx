import { useEffect, useRef, useMemo, memo } from "react";
import { lerp, norm } from "../helpers.js";
import { getF1 } from "../theme.js";

const MiniMap = memo(function MM({ tp, l1, l2, prog, c1, c2 }) {
  const F1 = getF1();
  const ref = useRef(null);
  const nn1 = useMemo(() => l1 ? norm(l1) : null, [l1]);
  const nn2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  useEffect(() => {
    const c = ref.current; if (!c || !tp?.length) return; const ctx = c.getContext("2d"), s = c.width, pad = 14;
    ctx.clearRect(0, 0, s, s); ctx.fillStyle = F1.overlay; ctx.beginPath(); ctx.moveTo(8,0); ctx.lineTo(s-8,0); ctx.quadraticCurveTo(s,0,s,8); ctx.lineTo(s,s-8); ctx.quadraticCurveTo(s,s,s-8,s); ctx.lineTo(8,s); ctx.quadraticCurveTo(0,s,0,s-8); ctx.lineTo(0,8); ctx.quadraticCurveTo(0,0,8,0); ctx.fill();
    let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
    for (const p of tp) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
    const range = Math.max(mxX - mnX, mxZ - mnZ) || 1;
    const proj = (p) => ({ x: pad + ((p.x - mnX) / range) * (s - pad * 2), y: pad + ((p.z - mnZ) / range) * (s - pad * 2) });
    ctx.strokeStyle = "rgba(225,6,0,0.3)"; ctx.lineWidth = 2.5; ctx.beginPath(); tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); }); ctx.closePath(); ctx.stroke();
    function dot(data, color) { const pts = data?.length >= 2 ? data : tp; const pt = lerp(pts, prog); const pp = proj(pt); ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = 8; ctx.beginPath(); ctx.arc(pp.x, pp.y, 5, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
    dot(nn1, c1); dot(nn2, c2);
  }, [tp, prog, l1, l2, c1, c2]);
  return <canvas ref={ref} width={150} height={150} style={{ width: 150, height: 150, borderRadius: 8 }} />;
});

export default MiniMap;
