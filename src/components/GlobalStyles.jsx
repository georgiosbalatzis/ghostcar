export default function GlobalStyles({ F1 }) {
  return (
    <style>{`
      @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
      *{box-sizing:border-box;margin:0;padding:0}
      .app-shell-mobile{overflow:hidden;height:100vh}
      .app-shell-embed{overflow:hidden;height:100vh}
      @supports (height: 100dvh){
        .app-shell-mobile{height:100dvh}
        .app-shell-embed{height:100dvh}
      }
      ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${F1.blue}44;border-radius:2px}
      select,button{font-family:${F1.sans}}
      select{background:${F1.inputBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
      select:hover,select:focus{border-color:${F1.blue}88}
      button{background:${F1.cardBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
      button:hover{border-color:${F1.blue}88;background:${F1.carbonMid}}
      .f1-btn{background:linear-gradient(135deg,${F1.blue},${F1.blueDark});border-color:${F1.blue};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
      .f1-btn:hover{background:linear-gradient(135deg,${F1.blueDark},#1e40af);box-shadow:0 4px 14px ${F1.blueGlow}}
      .f1-btn:disabled{opacity:.4;cursor:not-allowed}
      input[type="range"]{cursor:pointer}
      input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${F1.blue};border-radius:50%;cursor:pointer;border:2px solid #fff}
      .hdr-nav-link{position:relative;font-size:11px;color:${F1.textDim};text-decoration:none;padding:4px 2px;font-weight:600;letter-spacing:0.06em;transition:color .2s ease}
      .hdr-nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(90deg,#3b82f6,#2563eb);border-radius:2px;transition:width .25s ease}
      .hdr-nav-link:hover{color:#e4e4ec}.hdr-nav-link:hover::after{width:80%}
      .hdr-logo-link{display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;transition:filter .2s ease}
      .hdr-logo-link:hover{filter:drop-shadow(0 0 6px rgba(59,130,246,0.45))}
      .hdr-action-btn{transition:all .18s ease!important}
      .hdr-action-btn:hover{background:rgba(59,130,246,0.12)!important;border-color:rgba(59,130,246,0.3)!important;color:#e4e4ec!important}
      .hdr-action-btn-active{background:rgba(59,130,246,0.15)!important;border-color:rgba(59,130,246,0.4)!important;color:#93c5fd!important}
    `}</style>
  );
}
