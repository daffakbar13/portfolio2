import { Metadata } from "next";

import { ExperienceExplorer } from "@/components/experience/experience-explorer";
import { Blobs } from "@/components/motion/blobs";
import { SplitHeading } from "@/components/motion/split-heading";
import { Experiences } from "@/config/experience";
import { pageCopy } from "@/config/home";
import { pagesConfig } from "@/config/pages";
import {
  projectCover,
  projectKind,
  projectPeriod,
  projectTagline,
  projectTitle,
} from "@/lib/experience";
import { withStats } from "@/lib/stats";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const copy = pageCopy.experience;

export default function ExperiencePage() {
  const items = Experiences.map((exp) => ({
    id: exp.id,
    name: projectTitle(exp),
    kind: projectKind(exp),
    period: projectPeriod(exp),
    desc: projectTagline(exp),
    stack: exp.techStack.slice(0, 4),
    cover: projectCover(exp),
  }));

  return (
    <>
      <section className="relative isolate mx-auto max-w-[1280px] px-4 pb-8 pt-16 md:px-8 md:pt-28">
        <Blobs
          items={[
            { layer: "a", color: "lime", opacity: 0.3, className: "right-[6%] top-[60px] h-[260px] w-[260px] md:h-[420px] md:w-[420px]" },
            { layer: "b", color: "violet", opacity: 0.45, delay: -6, className: "right-[26%] top-[240px] h-[240px] w-[240px] md:h-[380px] md:w-[380px]" },
          ]}
        />
        <div className="eyebrow mb-5">{withStats(copy.eyebrow)}</div>
        <SplitHeading lines={[...copy.headingLines]} className="h-page m-0" />
      </section>
      <div className="pt-6 md:pt-10">
        <ExperienceExplorer items={items} />
      </div>
    </>
  );
}
