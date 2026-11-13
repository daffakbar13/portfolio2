import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SplitHeading } from "@/components/motion/split-heading";
import { careerExperiences } from "@/config/career";
import { Experiences } from "@/config/experience";
import { projectTitle } from "@/lib/experience";
import { formatPeriod } from "@/lib/utils";

interface CareerDetailPageProps {
  params: Promise<{
    careerId: string;
  }>;
}

export function generateStaticParams() {
  return careerExperiences.map((c) => ({ careerId: c.id }));
}

export async function generateMetadata({ params }: CareerDetailPageProps): Promise<Metadata> {
  const { careerId } = await params;
  const career = careerExperiences.find((c) => c.id === careerId);
  if (!career) return {};
  return {
    title: `${career.position} at ${career.company}`,
    description: career.description[0],
  };
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { careerId } = await params;
  const index = careerExperiences.findIndex((c) => c.id === careerId);
  const career = careerExperiences[index];
  if (!career) notFound();

  const next = careerExperiences[(index + 1) % careerExperiences.length];
  const project = Experiences.find((e) => e.id === career.id);
  const current = career.endDate === "Present";

  return (
    <>
      <section className="mx-auto max-w-[1100px] px-4 pt-12 md:px-8 md:pt-20">
        <Link href="/career" className="navlink mb-8 inline-flex items-center gap-2 font-mono text-[13px]">
          ← Career timeline
        </Link>
        <div className="mb-7 flex flex-wrap items-center gap-3">
          {career.logo && (
            <span className="relative inline-flex h-12 w-12 overflow-hidden rounded-2xl bg-white p-1.5">
              <Image src={career.logo} alt={`${career.company} logo`} fill sizes="48px" className="object-contain p-1.5" />
            </span>
          )}
          <span className={current ? "rounded-full bg-lime px-3 py-1.5 text-[13px] font-semibold text-ink" : "chip-outline"}>
            {formatPeriod(career.startDate, career.endDate)}
          </span>
          <span className="chip-outline">{career.location}</span>
        </div>
        <SplitHeading
          lines={[career.company]}
          step={0.03}
          className="m-0 font-display text-[clamp(44px,8vw,112px)] font-bold leading-[0.92] tracking-[-0.05em]"
        />
        <p className="mt-6 text-lg text-mute md:text-xl">{career.position}</p>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 md:px-8 md:py-24">
        <div className="eyebrow mb-4">WHAT I DID</div>
        <ol className="m-0 list-none p-0">
          {career.description.map((d, i) => (
            <li key={i} className="reveal flex gap-5 border-t border-line/[.08] py-[22px]">
              <span className="font-mono text-[13px] text-lime-ink">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base leading-relaxed text-fg-2 md:text-[17px]">{d.trim()}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 pb-16 md:px-8 md:pb-24">
        <div className="reveal flex flex-col gap-7 rounded-[32px] border border-line/[.08] bg-surface p-7 md:p-12">
          <h2 className="m-0 font-mono text-[13px] font-normal text-mute">SKILLS USED</h2>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {career.skills.map((s) => (
              <li key={s} className="rounded-full bg-surface-2 px-5 py-3 text-base font-medium">
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {project && (
              <Link href={`/experience/${project.id}`} className="btn-lime">
                Case study: {projectTitle(project)} <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
              </Link>
            )}
            {career.companyUrl && (
              <a href={career.companyUrl} target="_blank" rel="noreferrer" className="btn-glass glass lift">
                Company site ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <Link href={`/career/${next.id}`} className="group block border-t border-line/[.08] text-fg">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-end justify-between gap-6 px-4 pb-24 pt-[72px] md:px-8">
          <div>
            <div className="mb-3 font-mono text-[13px] text-mute">NEXT ROLE</div>
            <div className="font-display text-[clamp(36px,6vw,80px)] font-bold leading-[0.95] tracking-[-0.045em] group-hover:text-lime-ink">
              {next.company}
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
