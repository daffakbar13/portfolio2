import { careerExperiences } from "@/config/career";
import { Experiences } from "@/config/experience";

const WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];

/** "six" for 6, falls back to digits above twelve. */
export function numberWord(n: number): string {
  return WORDS[n] ?? String(n);
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const earliestStart = careerExperiences.reduce(
  (min, c) => (c.startDate < min ? c.startDate : min),
  careerExperiences[0]?.startDate ?? new Date()
);

function yearsSince(date: Date, now = new Date()): number {
  let years = now.getFullYear() - date.getFullYear();
  if (
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
  ) {
    years -= 1;
  }
  return Math.max(years, 0);
}

export const stats = {
  years: yearsSince(earliestStart),
  startYear: earliestStart.getFullYear(),
  companies: careerExperiences.length,
  projects: Experiences.length,
};

/** Replaces {years} {yearsWord} {Years} {companies} {companiesWord} {projects} {startYear}. */
export function withStats(text: string): string {
  return text
    .replaceAll("{years}", String(stats.years))
    .replaceAll("{Years}", capitalize(numberWord(stats.years)))
    .replaceAll("{yearsWord}", numberWord(stats.years))
    .replaceAll("{companies}", String(stats.companies))
    .replaceAll("{companiesWord}", numberWord(stats.companies))
    .replaceAll("{projects}", String(stats.projects))
    .replaceAll("{startYear}", String(stats.startYear));
}
