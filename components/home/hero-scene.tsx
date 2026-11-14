"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

const GlassTorus = dynamic(() => import("./glass-torus"), {
  ssr: false,
  loading: () => null,
});

function canUseWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const noop = () => () => {};
let webglCache: boolean | null = null;

/** WebGL torus only on ≥768px, WebGL-capable, motion-allowed browsers. */
function useRealTorus() {
  return useSyncExternalStore(
    noop,
    () => {
      if (window.innerWidth < 768) return false;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
      if (webglCache === null) webglCache = canUseWebGL();
      return webglCache;
    },
    () => false
  );
}

const TORUS_RINGS = Array.from({ length: 24 }, (_, i) => i);

function CssTorus({ size }: { size: "lg" | "sm" }) {
  const r = size === "lg" ? 250 : 120;
  const d = size === "lg" ? 124 : 60;
  return (
    <div className="torus absolute left-1/2 top-1/2 h-0 w-0">
      {TORUS_RINGS.map((i) => (
        <span
          key={i}
          className={cn(
            "absolute rounded-full border",
            i % 6 === 0 ? "border-lime bg-white/[.04]" : "border-line/20"
          )}
          style={{
            left: -d / 2,
            top: -d / 2,
            width: d,
            height: d,
            transform: `rotateY(${i * 15}deg) translateX(${r}px)`,
          }}
        />
      ))}
    </div>
  );
}

interface Face {
  label: string;
  num?: string;
  tone: "glass" | "lime" | "violet" | "dark";
  transform: string;
}

function Cube({ faces, size }: { faces: string[]; size: number }) {
  const half = size / 2;
  const list: Face[] = [
    { label: faces[0], num: "01", tone: "glass", transform: `translateZ(${half}px)` },
    { label: faces[1], num: "02", tone: "glass", transform: `rotateY(180deg) translateZ(${half}px)` },
    { label: faces[2], num: "03", tone: "lime", transform: `rotateY(90deg) translateZ(${half}px)` },
    { label: faces[3], num: "04", tone: "glass", transform: `rotateY(-90deg) translateZ(${half}px)` },
    { label: faces[4], tone: "violet", transform: `rotateX(90deg) translateZ(${half}px)` },
    { label: "", tone: "dark", transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  const big = size > 160;
  return (
    <div className="cube absolute inset-0">
      {list.map((f, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 flex flex-col justify-between font-mono",
            big ? "rounded-[18px] p-[22px] text-[13px]" : "rounded-xl p-2.5 text-[10px]",
            f.tone === "glass" && "face-glass text-mute",
            f.tone === "lime" && "bg-lime text-ink",
            f.tone === "violet" && "items-center justify-center bg-violet text-ink",
            f.tone === "dark" && "border border-line/[.12] bg-surface/90"
          )}
          style={{ transform: f.transform }}
        >
          {f.tone !== "violet" && f.num && <span>{f.num}</span>}
          {f.label && (
            <span
              className={cn(
                "font-display font-bold",
                big ? "text-[34px]" : "text-[17px]",
                f.tone === "glass" && "text-fg"
              )}
            >
              {f.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function HeroScene({ faces, hint }: { faces: string[]; hint: string }) {
  const real = useRealTorus();

  return (
    <>
      {/* Mobile: compact cube + ring, tilts with the phone */}
      <div
        aria-hidden="true"
        className="relative flex h-[260px] items-center justify-center [perspective:900px] md:hidden"
      >
        <div className="scene-rig relative h-[120px] w-[120px]">
          <div className="ring absolute -left-[60px] -top-[60px] h-[240px] w-[240px] rounded-full border border-line/[.16]">
            <span className="absolute -top-[5px] left-[115px] h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_14px_rgb(var(--c-lime))]" />
          </div>
          <Cube faces={faces} size={120} />
        </div>
      </div>

      {/* Desktop: torus + cube; flies out on scroll */}
      <div
        aria-hidden="true"
        className="flyout relative hidden h-[560px] min-w-0 flex-[1_1_440px] items-center justify-center [perspective:1400px] md:flex"
      >
        {real && <GlassTorus />}
        <div className="scene-rig relative h-[240px] w-[240px]">
          <div className="float absolute inset-0">
            {!real && <CssTorus size="lg" />}
            <Cube faces={faces} size={240} />
          </div>
        </div>
        <div className="absolute bottom-6 right-2 font-mono text-xs text-mute">{hint}</div>
      </div>
    </>
  );
}
