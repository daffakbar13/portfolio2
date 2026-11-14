"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

import { useRichPointer } from "./use-fine-pointer";

/** Pulls its child toward the pointer. Wrap a link or button. */
export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const rich = useRichPointer();

  const onMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || !rich || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength * 1.5;
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("magnetic inline-flex", className)}
    >
      {children}
    </span>
  );
}
