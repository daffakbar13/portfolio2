"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

import { useRichPointer } from "./use-fine-pointer";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max rotation in degrees around X / Y. */
  maxX?: number;
  maxY?: number;
  glare?: number;
}

/**
 * Pointer tilt + glare. Writes CSS variables on the element instead of
 * React state, so moving the pointer never re-renders.
 */
export function TiltCard({
  maxX = 7,
  maxY = 9,
  glare = 0.22,
  className,
  children,
  style,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rich = useRichPointer();

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !rich || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - y) * maxX * 2).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * maxY * 2).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${Math.round(x * 100)}%`);
    el.style.setProperty("--gy", `${Math.round(y * 100)}%`);
    el.style.setProperty("--go", "1");
    el.style.setProperty("--tz", "12px");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--go", "0");
    el.style.setProperty("--tz", "0px");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("tilt relative overflow-hidden", className)}
      style={{ ...style, ["--glare" as string]: String(glare) }}
      {...rest}
    >
      {children}
      <span aria-hidden="true" className="tilt-glare" />
    </div>
  );
}
