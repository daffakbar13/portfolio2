"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { useMediaQuery } from "@/components/motion/use-fine-pointer";
import { TiltCard } from "@/components/motion/tilt-card";
import { cn } from "@/lib/utils";

export interface ProjectCard {
  id: string;
  name: string;
  kind: "Professional" | "Personal";
  period: string;
  desc: string;
  stack: string[];
  cover?: string;
}

type Filter = "All" | "Professional" | "Personal";
type View = "Carousel" | "Grid";

const pad = (n: number) => String(n).padStart(2, "0");

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors",
        active ? "bg-lime text-ink" : "text-mute hover:text-fg"
      )}
    >
      {children}
    </button>
  );
}

function Cover({ p, sizes, eager }: { p: ProjectCard; sizes: string; eager?: boolean }) {
  return p.cover ? (
    <Image
      src={p.cover}
      alt={`${p.name} screenshot`}
      fill
      sizes={sizes}
      loading={eager ? "eager" : undefined}
      draggable={false}
      className="object-cover object-top"
    />
  ) : (
    <span className="absolute inset-0 flex items-end bg-surface-2 p-4 font-display text-3xl font-bold tracking-[-0.03em] text-mute">
      {p.name}
    </span>
  );
}

function Carousel({ items }: { items: ProjectCard[] }) {
  const narrow = useMediaQuery("(max-width: 767px)");
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x0: number; a0: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  const n = items.length;
  const step = 360 / n;
  const w = narrow ? 250 : 340;
  const h = narrow ? 360 : 440;
  const R = Math.max(w + 40, Math.round((w / 2 + 15) / Math.tan(Math.PI / n)) + 70);
  const front = ((Math.round(-angle / step) % n) + n) % n;

  const snap = (a: number) => Math.round(a / step) * step;
  const prev = () => setAngle((a) => snap(a) + step);
  const next = () => setAngle((a) => snap(a) - step);

  const onDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    drag.current = { x0: e.clientX, a0: angle, moved: false };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x0;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      setDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    }
    if (d.moved) setAngle(d.a0 + dx * (narrow ? 0.35 : 0.25));
  };
  const onUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    if (d.moved) {
      suppressClick.current = true;
      setDragging(false);
      setAngle((a) => snap(a));
      window.setTimeout(() => (suppressClick.current = false), 0);
    }
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <section aria-label="Project carousel" aria-roledescription="carousel" className="relative isolate pb-24 pt-6 md:pb-[120px] md:pt-10">
      <div
        tabIndex={0}
        role="group"
        aria-label="Projects, use left and right arrow keys to rotate"
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClickCapture={(e) => {
          if (suppressClick.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className={cn(
          "relative touch-pan-y select-none overflow-hidden [perspective:1800px]",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ height: h + 120 }}
      >
        <div
          className="absolute left-1/2 top-10 h-0 w-0 [transform-style:preserve-3d]"
          style={{
            transform: `translateZ(-${R}px) rotateY(${angle}deg)`,
            transition: dragging ? "none" : "transform .9s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {items.map((p, i) => {
            const isFront = i === front;
            return (
              <Link
                key={p.id}
                href={`/experience/${p.id}`}
                draggable={false}
                tabIndex={isFront ? 0 : -1}
                aria-hidden={isFront ? undefined : true}
                className="absolute top-0 flex flex-col gap-4 rounded-[28px] border border-line/[.22] px-3.5 pb-[22px] pt-3.5 text-fg"
                style={{
                  left: -w / 2,
                  width: w,
                  height: h,
                  background:
                    "linear-gradient(140deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03) 55%), rgb(var(--c-surface) / 0.7)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
                  transform: `rotateY(${i * step}deg) translateZ(${R}px) scale(${isFront ? 1.05 : 0.94})`,
                  filter: `brightness(${isFront ? 1 : 0.5})`,
                  transition: "filter .6s",
                }}
              >
                <span className="relative block aspect-[16/11] overflow-hidden rounded-[18px] bg-surface-2">
                  <Cover p={p} sizes="340px" eager={i === 0} />
                </span>
                <span className="flex flex-col gap-2 px-1.5">
                  <span className="flex justify-between gap-3 font-mono text-xs text-mute">
                    <span>{p.kind}</span>
                    <span>{p.period}</span>
                  </span>
                  <span className="font-display text-[22px] font-bold leading-[1.1] tracking-[-0.03em] md:text-[26px]">
                    {p.name}
                  </span>
                  <span className="line-clamp-3 text-sm leading-normal text-mute">{p.desc}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous project"
          onClick={prev}
          className="glass inline-flex h-[52px] w-[52px] items-center justify-center rounded-full text-fg"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <span className="min-w-[120px] text-center font-mono text-[13px] text-mute" aria-live="polite">
          <span data-testid="carousel-counter">
            {pad(front + 1)} / {pad(n)}
          </span>{" "}
          · drag to spin
        </span>
        <button
          type="button"
          aria-label="Next project"
          onClick={next}
          className="glass inline-flex h-[52px] w-[52px] items-center justify-center rounded-full text-fg"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function Grid({ items }: { items: ProjectCard[] }) {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-24 pt-6 md:px-8 md:pb-40 md:pt-10">
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-5 p-0">
        {items.map((p) => (
          <li key={p.id} className="reveal-soft flex">
            <TiltCard maxX={6} maxY={8} glare={0.18} className="flex flex-1 rounded-[28px] border border-line/[.08] bg-surface">
              <Link href={`/experience/${p.id}`} className="flex flex-1 flex-col gap-5 px-4 pb-6 pt-4 text-fg">
                <span className="relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-surface-2">
                  <Cover p={p} sizes="(min-width: 768px) 400px, 100vw" />
                </span>
                <span className="flex flex-col gap-2.5 px-2">
                  <span className="flex justify-between gap-3 font-mono text-xs text-mute">
                    <span>{p.kind}</span>
                    <span>{p.period}</span>
                  </span>
                  <h2 className="m-0 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em]">{p.name}</h2>
                  <p className="m-0 text-[15px] leading-[1.55] text-mute">{p.desc}</p>
                  <span className="mt-1.5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </TiltCard>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ExperienceExplorer({ items }: { items: ProjectCard[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState<View>("Carousel");
  const visible = items.filter((p) => filter === "All" || p.kind === filter);

  return (
    <>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-4 px-4 md:gap-6 md:px-8">
        <div role="group" aria-label="Filter projects" className="glass flex max-w-full gap-2 overflow-x-auto rounded-full p-1.5">
          {(["All", "Professional", "Personal"] as Filter[]).map((f) => (
            <Pill key={f} active={f === filter} onClick={() => setFilter(f)}>
              {f}
            </Pill>
          ))}
        </div>
        <div role="group" aria-label="View" className="glass flex gap-1.5 rounded-full p-1.5">
          {(["Carousel", "Grid"] as View[]).map((v) => (
            <Pill key={v} active={v === view} onClick={() => setView(v)}>
              {v}
            </Pill>
          ))}
        </div>
      </div>
      {view === "Carousel" ? (
        <Carousel key={filter} items={visible} />
      ) : (
        <Grid items={visible} />
      )}
    </>
  );
}
