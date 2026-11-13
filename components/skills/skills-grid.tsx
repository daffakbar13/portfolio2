"use client";

import { useState } from "react";

import { SkillCategory, skillCategories } from "@/config/skills";
import { cn } from "@/lib/utils";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  rating: number;
  description: string;
}

const LEVELS = ["", "Beginner", "Familiar", "Proficient", "Advanced", "Expert"];
type Tab = "All" | SkillCategory;

export function SkillsGrid({ items }: { items: SkillItem[] }) {
  const [tab, setTab] = useState<Tab>("All");
  const [flipped, setFlipped] = useState<string | null>(null);
  const tabs: Tab[] = ["All", ...skillCategories];
  const visible = items.filter((s) => tab === "All" || s.category === tab);

  return (
    <>
      <div className="mx-auto flex max-w-[1280px] justify-end px-4 md:px-8">
        <div
          role="group"
          aria-label="Filter skills"
          className="glass -mt-2 mb-10 flex max-w-full gap-1.5 overflow-x-auto rounded-[28px] p-1.5 md:flex-wrap"
        >
          {tabs.map((t) => {
            const on = t === tab;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setTab(t)}
                className={cn(
                  "h-11 shrink-0 rounded-full border px-[18px] text-sm font-semibold transition-colors",
                  on ? "border-lime bg-lime text-ink" : "border-transparent text-mute hover:text-fg"
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
      <section className="mx-auto max-w-[1280px] px-4 pb-24 md:px-8 md:pb-40">
        <p className="sr-only" aria-live="polite">
          {visible.length} skills shown
        </p>
        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] md:gap-4">
          {visible.map((s, i) => {
            const hi = i % 7 === 0;
            const isFlipped = flipped === s.name;
            return (
              <li key={s.name} className="reveal-soft">
                <div
                  className="flip gyro-tile h-[200px] md:h-[240px]"
                  data-flipped={isFlipped}
                >
                  <button
                    type="button"
                    aria-pressed={isFlipped}
                    aria-label={`${s.name}, ${LEVELS[s.rating]} ${s.rating} of 5. ${s.description}`}
                    onClick={() => setFlipped(isFlipped ? null : s.name)}
                    className="flip-inner block text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flip-face absolute inset-0 flex flex-col justify-between rounded-3xl border border-line/[.08] p-4 md:p-[22px]",
                        hi ? "bg-lime text-ink" : "bg-surface text-fg"
                      )}
                    >
                      <span className="flex justify-between font-mono text-[11px] opacity-80">
                        <span>{s.category.toUpperCase()}</span>
                        <span>{String(i + 1).padStart(2, "0")}</span>
                      </span>
                      <span>
                        <span className="block font-display text-[22px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[28px]">
                          {s.name}
                        </span>
                        <span className="mt-3.5 flex gap-1">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <span
                              key={n}
                              className={cn(
                                "h-[5px] flex-1 rounded-[3px]",
                                n <= s.rating
                                  ? hi
                                    ? "bg-ink"
                                    : "bg-lime"
                                  : hi
                                    ? "bg-ink/20"
                                    : "bg-track"
                              )}
                            />
                          ))}
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flip-face flip-back absolute inset-0 flex flex-col justify-between rounded-3xl border border-line/[.22] p-4 text-fg md:p-[22px]"
                      style={{
                        background:
                          "linear-gradient(140deg, rgba(139,124,255,0.42), rgba(255,255,255,0.06) 60%), rgb(var(--c-surface) / 0.92)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
                      }}
                    >
                      <span className="font-mono text-[11px]">
                        {LEVELS[s.rating].toUpperCase()} · {s.rating}/5
                      </span>
                      <span className="text-[13px] leading-normal md:text-[15px]">{s.description}</span>
                    </span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
