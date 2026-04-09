import { useEffect, useRef, useMemo, memo } from "react";
import { lerp, norm } from "../helpers.js";
import { useF1 } from "../theme.js";

const MiniMap = memo(function MM({ tp, l1, l2, prog, c1, c2, size = 150, flip = false }) {
  const F1 = useF1();
  const ref = useRef(null);
  const staticCanvasRef = useRef(null);
  const nn1 = useMemo(() => l1 ? norm(l1, flip) : null, [l1, flip]);
  const nn2 = useMemo(() => l2 ? norm(l2, flip) : null, [l2, flip]);
  const projector = useMemo(() => {
    if (!tp?.length) return null;
    const pad = 14;
    let mnX = Infinity;
    let mxX = -Infinity;
    let mnZ = Infinity;
    let mxZ = -Infinity;
    for (const point of tp) {
      if (point.x < mnX) mnX = point.x;
      if (point.x > mxX) mxX = point.x;
      if (point.z < mnZ) mnZ = point.z;
      if (point.z > mxZ) mxZ = point.z;
    }
    const range = Math.max(mxX - mnX, mxZ - mnZ) || 1;
    return {
      project: (point) => ({
        x: pad + ((point.x - mnX) / range) * (size - pad * 2),
        y: pad + ((point.z - mnZ) / range) * (size - pad * 2),
      }),
    };
  }, [tp, size]);

  useEffect(() => {
    if (!tp?.length || !projector) return;
    const staticCanvas = document.createElement("canvas");
    staticCanvas.width = size;
    staticCanvas.height = size;
    const ctx = staticCanvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = F1.overlay;
    ctx.beginPath();
    ctx.moveTo(8, 0);
    ctx.lineTo(size - 8, 0);
    ctx.quadraticCurveTo(size, 0, size, 8);
    ctx.lineTo(size, size - 8);
    ctx.quadraticCurveTo(size, size, size - 8, size);
    ctx.lineTo(8, size);
    ctx.quadraticCurveTo(0, size, 0, size - 8);
    ctx.lineTo(0, 8);
    ctx.quadraticCurveTo(0, 0, 8, 0);
    ctx.fill();
    ctx.strokeStyle = "rgba(225,6,0,0.22)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    tp.forEach((point, index) => {
      const projected = projector.project(point);
      if (index === 0) ctx.moveTo(projected.x, projected.y);
      else ctx.lineTo(projected.x, projected.y);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    tp.forEach((point, index) => {
      const projected = projector.project(point);
      if (index === 0) ctx.moveTo(projected.x, projected.y);
      else ctx.lineTo(projected.x, projected.y);
    });
    ctx.closePath();
    ctx.stroke();
    const start = projector.project(tp[0]);
    ctx.save();
    ctx.translate(start.x, start.y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    staticCanvasRef.current = staticCanvas;
  }, [F1.overlay, projector, size, tp]);

  useEffect(() => {
    const canvas = ref.current;
    const staticCanvas = staticCanvasRef.current;
    if (!canvas || !staticCanvas || !tp?.length || !projector) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(staticCanvas, 0, 0);

    function dot(data, color) {
      const pts = data?.length >= 2 ? data : tp;
      const pt = lerp(pts, prog);
      const pp = projector.project(pt);
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
  }, [projector, tp, prog, nn1, nn2, c1, c2]);
  return <canvas ref={ref} width={size} height={size} style={{ width: size, height: size, borderRadius: 8 }} />;
});

export default MiniMap;
