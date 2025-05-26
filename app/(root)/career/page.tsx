import { Metadata } from "next";

import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { careerExperiences } from "@/config/career";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

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

export default function CareerPage() {
  return (
    <PageContainer
      title={pagesConfig.career.title}
      description={pagesConfig.career.description}
    >
      <Timeline experiences={careerExperiences} />
    </PageContainer>
  );
}
