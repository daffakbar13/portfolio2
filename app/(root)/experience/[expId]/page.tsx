import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SplitHeading } from "@/components/motion/split-heading";
import { careerExperiences } from "@/config/career";
import { Experiences } from "@/config/experience";
import {
  nextProject,
  projectPeriod,
  projectShots,
  projectTagline,
  projectTitle,
} from "@/lib/experience";
import { cn } from "@/lib/utils";

interface ExperiencePageProps {
  params: Promise<{
    expId: string;
  }>;
}

export function generateStaticParams() {
  return Experiences.map((exp) => ({ expId: exp.id }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { expId } = await params;
  const exp = Experiences.find((e) => e.id === expId);
  if (!exp) return {};
  return {
    title: projectTitle(exp),
    description: projectTagline(exp),
  };
}

const FAN_ORDER = ["fan-3", "fan-2", "fan-4", "fan-1", "fan-5"];
const FAN_TONE = [
  "bg-lime text-ink",
  "bg-violet text-ink",
  "bg-fg text-canvas",
  "face-glass text-fg",
  "face-glass text-fg",
];

const hostOf = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

export default async function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const { expId } = await params;
  const exp = Experiences.find((val) => val.id === expId);
  if (!exp) notFound();

  const title = projectTitle(exp);
  const shots = projectShots(exp);
  const fan = shots.slice(0, 5);
  const career = careerExperiences.find((c) => c.id === exp.id);
  const paragraphs = exp.descriptionDetails.paragraphs.filter(
    (p) => p.trim().replace(/:$/, "").toLowerCase() !== "responsibilities"
  );
  const next = nextProject(exp.id);

  const meta = [
    { label: "COMPANY", value: career?.company ?? exp.companyName },
    { label: "ROLE", value: career?.position ?? exp.category[0] },
    { label: "TYPE", value: exp.type },
  ];

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pt-12 md:px-8 md:pt-20">
        <Link href="/experience" className="navlink mb-8 inline-flex items-center gap-2 font-mono text-[13px]">
          ← All projects
        </Link>
        <div className="mb-7 flex flex-wrap gap-2">
          {exp.category.map((c, i) => (
            <span
              key={c}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px]",
                i === 0 ? "bg-lime font-semibold text-ink" : "border border-line/[.14]"
              )}
            >
              {c}
            </span>
          ))}
          <span className="chip-outline">{projectPeriod(exp)}</span>
        </div>
        <SplitHeading
          lines={[title]}
          step={0.05}
          className="m-0 break-words font-display text-[clamp(52px,12vw,200px)] font-bold leading-[0.85] tracking-[-0.06em]"
        />
        <dl className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 border-t border-line/[.08] pt-7">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="mb-2 font-mono text-xs text-mute">{m.label}</dt>
              <dd className="m-0 text-[17px]">{m.value}</dd>
            </div>
          ))}
          {(exp.websiteLink || exp.githubLink) && (
            <div>
              <dt className="mb-2 font-mono text-xs text-mute">LINKS</dt>
              <dd className="m-0 flex flex-wrap gap-4 text-[17px]">
                {exp.websiteLink && (
                  <a href={exp.websiteLink} target="_blank" rel="noreferrer" className="border-b border-current hover:text-lime-ink">
                    {hostOf(exp.websiteLink)} ↗
                  </a>
                )}
                {exp.githubLink && (
                  <a href={exp.githubLink} target="_blank" rel="noreferrer" className="border-b border-current hover:text-lime-ink">
                    Source ↗
                  </a>
                )}
              </dd>
            </div>
          )}
        </dl>
      </section>

      {/* 3D fan of real screenshots */}
      {fan.length > 0 && (
        <section className="zoomout px-4 pb-10 pt-16 md:px-8 md:pt-24">
          <div
            role="img"
            aria-label={`Screens from ${title}: ${fan.map((s) => s.title).join(", ")}`}
            className="fan-stage relative flex h-[340px] items-center justify-center overflow-hidden [perspective:1600px] [transform-style:preserve-3d] md:h-[520px] md:overflow-visible"
          >
            {fan
              .map((shot, i) => ({ shot, i }))
              .reverse()
              .map(({ shot, i }) => (
                <div
                  key={shot.src + i}
                  className={cn(
                    "fan absolute flex flex-col gap-3 overflow-hidden rounded-3xl p-3",
                    FAN_ORDER[i],
                    FAN_TONE[i],
                    i === 0
                      ? "h-[300px] w-[220px] shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)] md:h-[460px] md:w-[340px]"
                      : "h-[270px] w-[190px] md:h-[420px] md:w-[300px]"
                  )}
                >
                  <span className="relative block flex-1 overflow-hidden rounded-2xl bg-surface-2">
                    <Image src={shot.src} alt="" fill sizes="340px" loading={i === 0 ? "eager" : undefined} className="object-cover object-top" />
                  </span>
                  <span className="px-1.5 pb-1 font-display text-lg font-bold md:text-[26px]">{shot.title}</span>
                </div>
              ))}
          </div>
          <p className="mt-4 hidden text-center font-mono text-xs text-mute [@media(hover:hover)]:md:block">hover to fan out</p>
        </section>
      )}

      {/* Overview */}
      <section className="mx-auto flex max-w-[1280px] flex-wrap gap-10 px-4 py-20 md:gap-16 md:px-8 md:py-[120px]">
        <div className="reveal min-w-0 flex-[1_1_320px]">
          <div className="eyebrow mb-4">OVERVIEW</div>
          <h2 className="m-0 font-display text-[34px] font-bold leading-[1.05] tracking-[-0.035em] md:text-[44px]">
            {projectTagline(exp)}
          </h2>
        </div>
        <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-1">
          {paragraphs.map((p, i) => (
            <p key={i} className="reveal mb-7 mt-0 text-[17px] leading-[1.65] text-fg-2 md:text-[19px]">
              {p}
            </p>
          ))}
          {exp.descriptionDetails.bullets.length > 0 && (
            <ol className="m-0 list-none p-0">
              {exp.descriptionDetails.bullets.map((b, i) => (
                <li key={i} className="reveal flex gap-5 border-t border-line/[.08] py-[22px]">
                  <span className="font-mono text-[13px] text-lime-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base leading-relaxed text-fg-2">{b}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-[1280px] px-4 pb-20 md:px-8 md:pb-[120px]">
        <div className="reveal flex flex-col gap-7 rounded-[32px] border border-line/[.08] bg-surface p-7 md:p-12">
          <h2 className="m-0 font-mono text-[13px] font-normal text-mute">TECH STACK</h2>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {exp.techStack.map((t) => (
              <li key={t} className="rounded-full bg-surface-2 px-5 py-3 text-base font-medium">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screens gallery */}
      {shots.length > 1 && (
        <section className="mx-auto max-w-[1280px] px-4 pb-20 md:px-8 md:pb-[120px]">
          <div className="eyebrow mb-4">SCREENS · {shots.length}</div>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4 p-0">
            {shots.map((s, i) => (
              <li key={s.src + i} className="reveal-soft">
                <figure className="m-0 overflow-hidden rounded-3xl border border-line/[.08] bg-surface">
                  <a href={s.src} target="_blank" rel="noreferrer" className="relative block aspect-[16/11] bg-surface-2">
                    <Image src={s.src} alt={`${title} — ${s.title}`} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover object-top" />
                  </a>
                  <figcaption className="flex flex-col gap-1 px-5 py-4">
                    <span className="font-display text-lg font-semibold">{s.title}</span>
                    {s.description && <span className="text-sm text-mute">{s.description}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next */}
      <Link href={`/experience/${next.id}`} className="group block border-t border-line/[.08] text-fg">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-6 px-4 pb-24 pt-[72px] md:px-8">
          <div>
            <div className="mb-3 font-mono text-[13px] text-mute">NEXT PROJECT</div>
            <div className="font-display text-[clamp(40px,7vw,96px)] font-bold leading-[0.95] tracking-[-0.045em] group-hover:text-lime-ink">
              {projectTitle(next)}
            </div>
          </div>
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:translate-x-1.5 md:h-[88px] md:w-[88px]">
            <ArrowRight className="h-7 w-7" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </>
  );
}
