"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Esquema vectorial estilo Linear: un modelo isométrico en wireframe
 * con cuatro vistas que se encienden por capas — Architecture,
 * Engineering, BIM y Digital Twin (gemelo sincronizado a la derecha).
 * Interactivo (chips) y con ciclo automático.
 */

// ---------- proyección isométrica → coordenadas SVG ----------
const U = 17;
const X = (x: number, z: number) => +((x - z) * 0.866 * U).toFixed(1);
const Y = (x: number, y: number, z: number) =>
  +(((x + z) * 0.5 - y) * U).toFixed(1);
const p = (x: number, y: number, z: number) => `${X(x, z)} ${Y(x, y, z)}`;
const seg = (a: [number, number, number], b: [number, number, number]) =>
  `M ${p(...a)} L ${p(...b)}`;
const ring = (y: number, x0: number, x1: number, z0: number, z1: number) =>
  `M ${p(x0, y, z0)} L ${p(x1, y, z0)} L ${p(x1, y, z1)} L ${p(x0, y, z1)} Z`;

const F = 1.5; // altura de piso

// Volumen arquitectónico: caja 6×4, 3 pisos + núcleo en azotea
const ARCH: string[] = [
  ring(0, -3, 3, -2, 2),
  ring(F, -3, 3, -2, 2),
  ring(2 * F, -3, 3, -2, 2),
  ring(3 * F, -3, 3, -2, 2),
  seg([-3, 0, -2], [-3, 3 * F, -2]),
  seg([3, 0, -2], [3, 3 * F, -2]),
  seg([3, 0, 2], [3, 3 * F, 2]),
  seg([-3, 0, 2], [-3, 3 * F, 2]),
  ring(3 * F + 0.9, -1.2, 1.2, -0.9, 0.9),
  seg([-1.2, 3 * F, -0.9], [-1.2, 3 * F + 0.9, -0.9]),
  seg([1.2, 3 * F, -0.9], [1.2, 3 * F + 0.9, -0.9]),
  seg([1.2, 3 * F, 0.9], [1.2, 3 * F + 0.9, 0.9]),
  seg([-1.2, 3 * F, 0.9], [-1.2, 3 * F + 0.9, 0.9]),
];

// Grilla de sitio
const GRID: string[] = [];
for (const x of [-5, -2.5, 0, 2.5, 5]) GRID.push(seg([x, 0, -3.5], [x, 0, 3.5]));
for (const z of [-3.5, -1.75, 0, 1.75, 3.5]) GRID.push(seg([-5, 0, z], [5, 0, z]));

// Estructura: columnas interiores, vigas, arriostres y fundaciones
const COLS: [number, number][] = [
  [-1.2, -0.7],
  [1.2, -0.7],
  [1.2, 0.7],
  [-1.2, 0.7],
];
const STRUCT: string[] = [
  ...COLS.map(([x, z]) => seg([x, 0, z], [x, 3 * F, z])),
  ring(F, -1.2, 1.2, -0.7, 0.7),
  ring(2 * F, -1.2, 1.2, -0.7, 0.7),
  seg([-3, 0, -2], [-1, F, -2]),
  seg([-1, 0, -2], [-3, F, -2]),
  ...([[-3, -2], [3, -2], [3, 2], [-3, 2]] as [number, number][]).map(([x, z]) =>
    seg([x, 0, z], [x, -0.6, z])
  ),
];
const MEP = `M ${p(-2.6, 2.7, 1.4)} L ${p(1.8, 2.7, 1.4)} L ${p(1.8, 2.7, -1.3)} L ${p(2.6, 2.7, -1.3)}`;

// Etiquetas BIM con línea guía
const BIM_TAGS = [
  { ax: X(1.2, -0.9), ay: Y(1.2, 3 * F + 0.9, -0.9), dx: 16, dy: -12, text: "IfcBuilding · LOD 350" },
  { ax: X(3, -2), ay: Y(3, 2.2, -2), dx: 18, dy: 10, text: "IfcWall · FR 2HR" },
  { ax: X(0, 2), ay: Y(0, 0.4, 2), dx: 14, dy: 16, text: "IfcSlab · C30/37" },
];

// Gemelo digital: misma geometría desplazada + flujos de datos
const TWIN_DX = 175;
const TWIN_DY = -8;
const STREAMS = [0.8, 2.3, 3.8].map((y) => {
  const sx = X(3, 0);
  const sy = Y(3, y, 0);
  const ex = X(-3, 0) + TWIN_DX;
  const ey = sy + TWIN_DY;
  return `M ${sx} ${sy} C ${sx + 30} ${sy - 22}, ${ex - 30} ${ey - 22}, ${ex} ${ey}`;
});
const SENSORS: [number, number][] = [
  [X(-3, -2), Y(-3, 1.5, -2)],
  [X(3, 2), Y(3, 3, 2)],
  [X(1.2, 0.9), Y(1.2, 3 * F + 0.9, 0.9)],
];

const LAYERS = [
  { label: "Architecture", color: "#C9CFDD", blurb: "Design intent — massing, levels, envelope" },
  { label: "Engineering", color: "#5B8DEF", blurb: "Structure & MEP coordinated in one model" },
  { label: "BIM", color: "#E0A63E", blurb: "Every element carries real data, not just geometry" },
  { label: "Digital Twin", color: "#2DB7A3", blurb: "The model stays live — synced with the built asset" },
] as const;

export function HeroDiagram() {
  const [active, setActive] = useState(0);
  const manualUntil = useRef(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (Date.now() < manualUntil.current) return;
      setActive((a) => (a + 1) % LAYERS.length);
    }, 3600);
    return () => clearInterval(id);
  }, []);

  const pick = (i: number) => {
    manualUntil.current = Date.now() + 9000;
    setActive(i);
  };

  const layerStyle = (i: number, idleOpacity: number) => ({
    opacity: active === i ? 1 : idleOpacity,
    filter: active === i ? `drop-shadow(0 0 5px ${LAYERS[i].color}55)` : undefined,
  });

  return (
    <div className="w-full max-w-[420px]">
      <style>{`
        .hv-draw{stroke-dasharray:1 1;stroke-dashoffset:1;animation:hvDraw 1.1s cubic-bezier(.4,0,.2,1) forwards;animation-delay:var(--d,0s)}
        @keyframes hvDraw{to{stroke-dashoffset:0}}
        .hv-fade{opacity:0;animation:hvFade .8s ease forwards;animation-delay:var(--d,0s)}
        @keyframes hvFade{to{opacity:1}}
        .hv-flow{stroke-dasharray:2 7;animation:hvFlow 1s linear infinite}
        @keyframes hvFlow{to{stroke-dashoffset:-18}}
        .hv-ping{transform-origin:center;transform-box:fill-box;animation:hvPing 2.2s ease-out infinite}
        @keyframes hvPing{0%{opacity:.8;transform:scale(.4)}70%,100%{opacity:0;transform:scale(1.9)}}
        @media (prefers-reduced-motion:reduce){
          .hv-draw{animation:none;stroke-dashoffset:0}
          .hv-fade{animation:none;opacity:1}
          .hv-flow,.hv-ping{animation:none}
        }
      `}</style>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent p-5 sm:p-6">
        {/* encabezado del panel */}
        <div className="mb-3 flex items-center justify-between font-code text-[10px] uppercase tracking-widest text-[#5E7096]">
          <span>model.aima — 4 views</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#2DB7A3]/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#2DB7A3]" />
            </span>
            live
          </span>
        </div>

        <svg
          viewBox="-84 -132 352 196"
          className="block w-full"
          fill="none"
          aria-label="Diagram: architecture, engineering, BIM and digital twin layers of one model"
          role="img"
        >
          {/* grilla de sitio */}
          <g stroke="#223049" strokeWidth="1" style={{ opacity: 0.55 }}>
            {GRID.map((d, i) => (
              <path key={i} d={d} pathLength={1} vectorEffect="non-scaling-stroke" className="hv-draw" style={{ "--d": "0s" } as React.CSSProperties} />
            ))}
          </g>

          {/* 1 · Arquitectura */}
          <g
            stroke={LAYERS[0].color}
            strokeWidth="1.1"
            className="transition-opacity duration-500"
            style={layerStyle(0, 0.38)}
          >
            {ARCH.map((d, i) => (
              <path key={i} d={d} pathLength={1} vectorEffect="non-scaling-stroke" className="hv-draw" style={{ "--d": "0.25s" } as React.CSSProperties} />
            ))}
          </g>

          {/* 2 · Ingeniería */}
          <g
            stroke={LAYERS[1].color}
            strokeWidth="1.1"
            className="transition-opacity duration-500"
            style={layerStyle(1, 0.14)}
          >
            {STRUCT.map((d, i) => (
              <path key={i} d={d} pathLength={1} vectorEffect="non-scaling-stroke" className="hv-draw" style={{ "--d": "0.6s" } as React.CSSProperties} />
            ))}
            <g className="hv-fade" style={{ "--d": "1s" } as React.CSSProperties}>
              <path d={MEP} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
            </g>
          </g>

          {/* 3 · BIM */}
          <g
            stroke={LAYERS[2].color}
            strokeWidth="1"
            className="transition-opacity duration-500"
            style={layerStyle(2, 0.14)}
          >
            {BIM_TAGS.map((t, i) => (
              <g key={i} className="hv-fade" style={{ "--d": `${1.1 + i * 0.15}s` } as React.CSSProperties}>
                <circle cx={t.ax} cy={t.ay} r="2.2" fill={LAYERS[2].color} stroke="none" />
                <path
                  d={`M ${t.ax} ${t.ay} l ${t.dx} ${t.dy} h 10`}
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  x={t.ax + t.dx + 14}
                  y={t.ay + t.dy + 3}
                  fontSize="9"
                  fill={LAYERS[2].color}
                  stroke="none"
                  className="font-code"
                >
                  {t.text}
                </text>
              </g>
            ))}
          </g>

          {/* 4 · Gemelo digital */}
          <g className="transition-opacity duration-500" style={layerStyle(3, 0.06)}>
            {/* flujos de datos */}
            <g stroke={LAYERS[3].color} strokeWidth="1">
              {STREAMS.map((d, i) => (
                <path key={i} d={d} className="hv-flow" vectorEffect="non-scaling-stroke" />
              ))}
            </g>
            {STREAMS.map((d, i) => (
              <circle key={i} r="2" fill={LAYERS[3].color}>
                <animateMotion dur={`${2 + i * 0.4}s`} repeatCount="indefinite" path={d} />
              </circle>
            ))}
            <text x="87" y="-50" fontSize="8" fill="#2DB7A3" textAnchor="middle" className="font-code" style={{ letterSpacing: "0.12em" }}>
              LIVE DATA
            </text>

            {/* réplica sincronizada */}
            <g transform={`translate(${TWIN_DX}, ${TWIN_DY})`}>
              <g stroke={LAYERS[3].color} strokeWidth="1" strokeDasharray="3 4" style={{ opacity: 0.85 }}>
                {ARCH.map((d, i) => (
                  <path key={i} d={d} vectorEffect="non-scaling-stroke" />
                ))}
              </g>
              {SENSORS.map(([cx, cy], i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="4" fill={LAYERS[3].color} className="hv-ping" style={{ animationDelay: `${i * 0.7}s` }} />
                  <circle cx={cx} cy={cy} r="1.6" fill={LAYERS[3].color} />
                </g>
              ))}
              <text x="0" y="56" fontSize="8" fill="#5E7096" textAnchor="middle" className="font-code" style={{ letterSpacing: "0.12em" }}>
                DIGITAL TWIN — SYNCED
              </text>
            </g>
          </g>
        </svg>

        {/* selector de capas */}
        <div className="mt-4 flex flex-wrap gap-2">
          {LAYERS.map((layer, i) => (
            <button
              key={layer.label}
              type="button"
              onClick={() => pick(i)}
              onMouseEnter={() => pick(i)}
              aria-pressed={active === i}
              className="rounded-full border px-3 py-1.5 font-code text-[11px] uppercase tracking-wide transition-colors duration-300"
              style={
                active === i
                  ? { borderColor: `${layer.color}88`, color: layer.color, backgroundColor: `${layer.color}14` }
                  : { borderColor: "rgba(255,255,255,0.14)", color: "#7C8FB5" }
              }
            >
              {layer.label}
            </button>
          ))}
        </div>
        <p className="mt-2.5 min-h-[1.5em] font-code text-xs text-[#7C8FB5]">
          {LAYERS[active].blurb}
        </p>
      </div>
    </div>
  );
}
