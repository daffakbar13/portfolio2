import { Metadata } from "next";
import Link from "next/link";

import { SplitHeading } from "@/components/motion/split-heading";
import { careerExperiences } from "@/config/career";
import { pageCopy } from "@/config/home";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { withStats } from "@/lib/stats";
import { cn, formatPeriod } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${pagesConfig.career.metadata.title} | Interactive Developer Timeline`,
  description: `${pagesConfig.career.metadata.description} This interactive career timeline showcases professional experience in a visually appealing way.`,
  keywords: [
    "career timeline",
    "interactive timeline",
    "developer experience",
    "portfolio",
    "Next.js",
  ],
  alternates: {
    canonical: `${siteConfig.url}/career`,
  },
};

const copy = pageCopy.career;

export default function CareerPage() {
  const jobs = careerExperiences
    .slice()
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  const startYear = Math.min(...jobs.map((j) => j.startDate.getFullYear()));

  return (
    <>
      <section className="relative mx-auto max-w-[1280px] overflow-hidden px-4 pb-16 pt-16 md:overflow-visible md:px-8 md:pb-24 md:pt-28">
        <div
          aria-hidden="true"
          className="bigyear absolute right-0 top-10 font-display text-[clamp(110px,22vw,340px)] font-bold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgb(var(--c-line)/0.12)]"
        >
          {startYear}→
        </div>
        <div className="eyebrow relative mb-5">{copy.eyebrow}</div>
        <SplitHeading
          lines={copy.headingLines.map((l) => withStats(l))}
          className="h-page relative m-0"
        />
        <p className="relative mt-10 max-w-[520px] text-base leading-relaxed text-mute md:text-lg">{copy.intro}</p>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 pb-24 md:px-8 md:pb-40">
        <div className="relative pl-10 md:pl-14">
          <div aria-hidden="true" className="absolute bottom-0 left-[9px] top-0 w-0.5 bg-line/[.08] md:left-[15px]" />
          <div aria-hidden="true" className="progress absolute bottom-0 left-[9px] top-0 w-0.5 origin-top bg-lime md:left-[15px]" />
          <ol className="m-0 flex list-none flex-col gap-8 p-0">
            {jobs.map((j) => {
              const current = j.endDate === "Present";
              return (
                <li key={j.id} className="tunnel relative">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[39px] top-[34px] h-[18px] w-[18px] rounded-full border-2 bg-canvas shadow-[0_0_0_6px_rgb(var(--c-canvas))] md:-left-[49px]",
                      current ? "border-lime" : "border-mute"
                    )}
                  />
                  <article className="flex flex-col gap-[18px] rounded-[28px] border border-line/[.08] bg-surface p-6 md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <h2 className="m-0 font-display text-2xl font-bold tracking-[-0.03em] md:text-[30px]">
                          <Link href={`/career/${j.id}`} className="hover:text-lime-ink">
                            {j.company}
                          </Link>
                        </h2>
                        <div className="mt-1.5 text-[15px] text-mute">
                          {j.position} · {j.location.split(",")[0]}
                        </div>
                      </div>
                      <span
                        className={cn(
                          "rounded-full border border-line/[.14] px-3 py-1.5 font-mono text-[13px]",
                          current ? "text-lime-ink" : "text-mute"
                        )}
                      >
                        {formatPeriod(j.startDate, j.endDate)}
                      </span>
                    </div>
                    <ul className="m-0 flex flex-col gap-2 pl-[18px] text-[15px] leading-relaxed text-fg-2">
                      {j.description.slice(0, 3).map((pt, i) => (
                        <li key={i}>{pt.trim()}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {j.skills.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                      <Link href={`/career/${j.id}`} className="font-mono text-[13px] text-lime-ink">
                        Details →
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
