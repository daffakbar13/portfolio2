import { ExperienceInterface, Experiences } from "@/config/experience";

import { formatYears } from "./utils";

export function projectTitle(exp: ExperienceInterface): string {
  return exp.projectName ?? exp.companyName;
}

export function projectTagline(exp: ExperienceInterface): string {
  return exp.tagline ?? exp.shortDescription;
}

/** Every screenshot of a project, in config order. */
export function projectShots(exp: ExperienceInterface) {
  return exp.pagesInfoArr.flatMap((page) =>
    page.imgArr.map((src, i) => ({
      src,
      title: page.imgArr.length > 1 ? `${page.title} ${i + 1}` : page.title,
      description: page.description,
    }))
  );
}

export function projectCover(exp: ExperienceInterface): string | undefined {
  return projectShots(exp)[0]?.src;
}

/** Ongoing roles store `new Date()` as end date. */
function isOngoing(end: Date) {
  return Math.abs(end.getTime() - Date.now()) < 1000 * 60 * 60 * 24 * 31;
}

export function projectPeriod(exp: ExperienceInterface): string {
  if (exp.companyName === "Confidential") return "Confidential";
  if (exp.type === "Personal Project") return `Personal · ${exp.startDate.getUTCFullYear()}`;
  return formatYears(exp.startDate, isOngoing(exp.endDate) ? "Present" : exp.endDate);
}

export function projectCompany(exp: ExperienceInterface): string {
  return exp.companyName;
}

export function nextProject(id: string): ExperienceInterface {
  const i = Experiences.findIndex((e) => e.id === id);
  return Experiences[(i + 1) % Experiences.length];
}

/** Short type label used in filter + card meta. */
export function projectKind(exp: ExperienceInterface): "Professional" | "Personal" {
  return exp.type === "Professional" ? "Professional" : "Personal";
}
