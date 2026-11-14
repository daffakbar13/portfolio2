import { Metadata } from "next";

import { Blobs } from "@/components/motion/blobs";
import { SplitHeading } from "@/components/motion/split-heading";
import { TiltPermission } from "@/components/motion/tilt-permission";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { pageCopy } from "@/config/home";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

const copy = pageCopy.skills;

export default function SkillsPage() {
  const items = skills.map(({ name, category, rating, description }) => ({
    name,
    category,
    rating,
    description,
  }));

  return (
    <>
      <section className="relative isolate mx-auto max-w-[1280px] px-4 pb-12 pt-16 md:px-8 md:pt-28">
        <Blobs
          items={[
            { layer: "a", color: "violet", opacity: 0.45, className: "right-[4%] top-20 h-[260px] w-[260px] md:h-[420px] md:w-[420px]" },
            { layer: "b", color: "lime", opacity: 0.28, delay: -6, className: "right-[30%] top-[260px] h-[220px] w-[220px] md:h-[360px] md:w-[360px]" },
          ]}
        />
        <div className="eyebrow mb-5">{copy.eyebrow.replace("{count}", String(items.length))}</div>
        <SplitHeading lines={[copy.heading]} step={0.045} className="h-page m-0" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <p className="m-0 max-w-[460px] text-base leading-relaxed text-mute md:text-lg">
            <span className="hidden [@media(hover:hover)]:inline">{copy.intro}</span>
            <span className="[@media(hover:hover)]:hidden">{copy.introTouch}</span>
          </p>
          <TiltPermission />
        </div>
      </section>
      <SkillsGrid items={items} />
    </>
  );
}
