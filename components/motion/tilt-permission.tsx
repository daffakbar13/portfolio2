"use client";

import { Smartphone } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { useMediaQuery, useMounted } from "./use-fine-pointer";

type OrientationCtor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

/**
 * iOS only exposes gyroscope data after a user gesture. Shows a small pill
 * on touch devices that need the permission; elsewhere renders nothing.
 */
export function TiltPermission({ className }: { className?: string }) {
  const mounted = useMounted();
  const coarse = useMediaQuery("(pointer: coarse)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [state, setState] = useState<"idle" | "on" | "denied">("idle");

  if (!mounted || !coarse || reduced || typeof DeviceOrientationEvent === "undefined") {
    return null;
  }
  const ctor = DeviceOrientationEvent as OrientationCtor;
  if (typeof ctor.requestPermission !== "function" || state === "on") return null;

  const ask = async () => {
    try {
      const res = await ctor.requestPermission!();
      if (res === "granted") {
        window.dispatchEvent(new Event("tilt-granted"));
        setState("on");
      } else setState("denied");
    } catch {
      setState("denied");
    }
  };

  return (
    <button
      type="button"
      onClick={ask}
      disabled={state === "denied"}
      className={cn(
        "glass inline-flex h-11 items-center gap-2 rounded-full px-4 font-mono text-xs text-mute",
        className
      )}
    >
      <Smartphone className="h-4 w-4" aria-hidden="true" />
      {state === "denied" ? "Tilt not allowed" : "Tilt your phone"}
    </button>
  );
}
