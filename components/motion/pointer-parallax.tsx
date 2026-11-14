"use client";

import { useEffect } from "react";

/**
 * Writes the pointer position (or device tilt) to `--px` / `--py` on <html>
 * in the range -0.5..0.5. Blobs (`.par-*`) and the hero rig read them.
 */
export function PointerParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    let frame = 0;
    let px = 0;
    let py = 0;

    const flush = () => {
      frame = 0;
      root.style.setProperty("--px", px.toFixed(3));
      root.style.setProperty("--py", py.toFixed(3));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(flush);
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX / window.innerWidth - 0.5;
      py = e.clientY / window.innerHeight - 0.5;
      schedule();
    };

    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      const b = Math.max(-30, Math.min(30, e.beta - 45));
      const g = Math.max(-30, Math.min(30, e.gamma));
      px = g / 60;
      py = b / 60;
      schedule();
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("deviceorientation", onTilt);
    const onGranted = () => window.addEventListener("deviceorientation", onTilt);
    window.addEventListener("tilt-granted", onGranted);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("deviceorientation", onTilt);
      window.removeEventListener("tilt-granted", onGranted);
    };
  }, []);

  return null;
}
