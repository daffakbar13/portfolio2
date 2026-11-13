import { Metadata } from "next";

import { SplitHeading } from "@/components/motion/split-heading";
import { contributionsUnsorted } from "@/config/contributions";
import { pageCopy } from "@/config/home";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contributions.metadata.title,
  description: pagesConfig.contributions.metadata.description,
};

const copy = pageCopy.contributions;

function prNumber(link: string): string | null {
  const m = link.match(/\/pull\/(\d+)/);
  return m ? `#${m[1]}` : null;
}

export default function ContributionsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-4 pb-12 pt-16 md:px-8 md:pb-16 md:pt-28">
        <div className="eyebrow mb-5">{copy.eyebrow}</div>
        <SplitHeading lines={[...copy.headingLines]} className="h-page m-0" />
        <p className="mt-10 max-w-[520px] text-base leading-relaxed text-mute md:text-lg">{copy.intro}</p>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-24 md:px-8 md:pb-40">
        <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {contributionsUnsorted.map((c) => {
            const pr = prNumber(c.link);
            return (
              <li key={c.link} className="reveal">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="lift group flex h-full flex-col justify-between gap-8 rounded-[28px] border border-line/[.08] bg-surface p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[13px] text-mute">{c.repoOwner}</div>
                      <h2 className="m-0 mt-1.5 font-display text-2xl font-bold tracking-[-0.03em] group-hover:text-lime-ink">
                        {c.repo}
                      </h2>
                    </div>
                    {pr && <span className="chip font-mono">{pr}</span>}
                  </div>
                  <p className="m-0 text-[15px] leading-relaxed text-fg-2">{c.contibutionDescription}</p>
                  <span className="font-mono text-[13px] text-lime-ink">
                    View pull request ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
