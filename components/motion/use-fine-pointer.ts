"use client";

import { useSyncExternalStore } from "react";

function subscribeQuery(query: string) {
  return (cb: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  };
}

export function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    subscribeQuery(query),
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}

/** True for mouse/trackpad users who have not asked for reduced motion. */
export function useRichPointer() {
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  return fine && !reduced;
}

const noop = () => () => {};

/** False during SSR and the hydration render, true afterwards. */
export function useMounted() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false
  );
}
