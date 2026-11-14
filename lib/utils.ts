import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const monthShort = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });

/** "Nov 2023 — Present", "Apr — Nov 2023", "Sep 2022 — Mar 2023". */
export function formatPeriod(start: Date, end: Date | "Present"): string {
  if (end === "Present") return `${monthShort(start)} ${start.getUTCFullYear()} — Present`;
  if (start.getUTCFullYear() === end.getUTCFullYear()) {
    return `${monthShort(start)} — ${monthShort(end)} ${end.getUTCFullYear()}`;
  }
  return `${monthShort(start)} ${start.getUTCFullYear()} — ${monthShort(end)} ${end.getUTCFullYear()}`;
}

/** "2020", "2020 — 2022", "2023 — Now". */
export function formatYears(start: Date, end: Date | "Present"): string {
  const a = start.getUTCFullYear();
  if (end === "Present") return `${a} — Now`;
  const b = end.getUTCFullYear();
  return a === b ? String(a) : `${a} — ${b}`;
}

/** Splits "Full-stack" into per-character delays for split-letter headings. */
export function splitChars(text: string, start = 0.1, step = 0.04) {
  return Array.from(text).map((c, i) => ({
    c,
    d: `${(start + i * step).toFixed(3)}s`,
  }));
}
