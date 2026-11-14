"use client";

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface GlobePlace {
  label: string;
  color: "lime" | "violet" | "cyan" | "coral";
  lon: number;
  lat: number;
}

const dot = { lime: "bg-lime", violet: "bg-violet", cyan: "bg-cyan", coral: "bg-coral" };
const MERIDIANS = [0, 30, 60, 90, 120, 150];

/** Draggable wireframe globe with auto-spin. Decorative; the legend carries the info. */
export function Globe({ places }: { places: GlobePlace[] }) {
  const [rot, setRot] = useState({ x: -18, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x0: number; y0: number; rx: number; ry: number } | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-8 md:gap-12">
      <div
        aria-hidden="true"
        onPointerDown={(e) => {
          drag.current = { x0: e.clientX, y0: e.clientY, rx: rot.x, ry: rot.y };
          setDragging(true);
          (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d) return;
          setRot({
            y: d.ry + (e.clientX - d.x0) * 0.6,
            x: Math.max(-60, Math.min(60, d.rx - (e.clientY - d.y0) * 0.4)),
          });
        }}
        onPointerUp={() => {
          drag.current = null;
          setDragging(false);
        }}
        onPointerCancel={() => {
          drag.current = null;
          setDragging(false);
        }}
        className={cn(
          "flex h-[220px] touch-pan-y select-none items-center pl-2 [perspective:900px] md:h-[260px] md:pl-[60px]",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
      >
        <div
          className="relative h-[200px] w-[200px] [transform-style:preserve-3d]"
          style={{
            transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
            transition: dragging ? "none" : "transform .8s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <div className={cn("globe absolute inset-0", dragging && "paused")}>
            {MERIDIANS.map((deg) => (
              <div
                key={deg}
                className={cn(
                  "absolute inset-0 rounded-full border",
                  deg % 90 === 0 ? "border-lime/60" : "border-lime/[.35]"
                )}
                style={{ transform: `rotateY(${deg}deg)` }}
              />
            ))}
            <div className="absolute inset-0 rounded-full border border-line/25" style={{ transform: "rotateX(90deg)" }} />
            <div className="absolute left-[13px] top-[13px] h-[174px] w-[174px] rounded-full border border-line/[.14]" style={{ transform: "rotateX(90deg) translateZ(50px)" }} />
            <div className="absolute left-[13px] top-[13px] h-[174px] w-[174px] rounded-full border border-line/[.14]" style={{ transform: "rotateX(90deg) translateZ(-50px)" }} />
            {places.map((p, i) => (
              <span
                key={p.label}
                className={cn("absolute left-[95px] top-[95px] h-2.5 w-2.5 rounded-full", dot[p.color], i === 0 && "pulse")}
                style={{ transform: `rotateY(${p.lon}deg) rotateX(${p.lat}deg) translateZ(100px)` }}
              />
            ))}
          </div>
        </div>
      </div>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0 font-mono text-xs text-mute">
        {places.map((p) => (
          <li key={p.label} className="flex items-center gap-2">
            <span className={cn("h-2 w-2 rounded-full", dot[p.color])} />
            {p.label}
          </li>
        ))}
        <li aria-hidden="true" className="mt-1.5">drag to spin ↻</li>
      </ul>
    </div>
  );
}
