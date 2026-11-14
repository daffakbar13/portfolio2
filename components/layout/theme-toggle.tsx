"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useMounted } from "@/components/motion/use-fine-pointer";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title={isLight ? "Switch to dark" : "Switch to light"}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={cn(
        "glass inline-flex h-11 w-11 items-center justify-center rounded-full text-fg",
        className
      )}
    >
      {isLight ? (
        <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
