import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { SplitHeading } from "@/components/motion/split-heading";
import { careerExperiences } from "@/config/career";
import { pageCopy } from "@/config/home";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { formatPeriod } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

const copy = pageCopy.resume;

export default function ResumePage() {
  const link = process.env.NEXT_PUBLIC_RESUME_LINK;
  if (link) redirect(link);

  const jobs = careerExperiences
    .slice()
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16 md:px-8 md:pb-40 md:pt-28">
      <div className="eyebrow mb-5">{copy.eyebrow}</div>
      <SplitHeading lines={[...copy.headingLines]} className="h-page m-0" />
      <p className="mt-10 max-w-[560px] text-base leading-relaxed text-mute md:text-lg">{copy.intro}</p>

      <div className="mt-14 rounded-[28px] border border-line/[.08] bg-surface p-6 md:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line/[.08] pb-6">
          <div>
            <h2 className="m-0 font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">{siteConfig.authorName}</h2>
            <div className="mt-1.5 text-[15px] text-mute">
              {siteConfig.role} · {siteConfig.location}
            </div>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="font-mono text-[13px] text-lime-ink">
            {siteConfig.email}
          </a>
        </div>
        <ol className="m-0 flex list-none flex-col p-0">
          {jobs.map((j) => (
            <li
              key={j.id}
              className="flex flex-col gap-1 border-b border-line/[.08] py-5 last:border-b-0 md:flex-row md:items-baseline md:justify-between md:gap-6"
            >
              <div>
                <Link href={`/career/${j.id}`} className="font-display text-lg font-semibold hover:text-lime-ink">
                  {j.company}
                </Link>
                <div className="text-[15px] text-fg-2">{j.position}</div>
              </div>
              <span className="shrink-0 font-mono text-[13px] text-mute">{formatPeriod(j.startDate, j.endDate)}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/career" className="btn-lime">
          Full career timeline →
        </Link>
        <Link href="/contact" className="btn-glass">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
