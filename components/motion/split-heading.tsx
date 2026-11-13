import { createElement } from "react";

import { cn, splitChars } from "@/lib/utils";

interface SplitHeadingProps {
  lines: string[];
  as?: "h1" | "h2" | "p";
  className?: string;
  /** Extra classes per line, by index. */
  lineClassNames?: (string | undefined)[];
  start?: number;
  step?: number;
  /** Delay added between lines, in seconds. */
  lineGap?: number;
}

type Char = { c: string; d: string };

/** Groups characters into words so a line only breaks between words. */
function words(chars: Char[]) {
  const out: { space: boolean; chars: Char[] }[] = [];
  for (const ch of chars) {
    const space = ch.c === " ";
    const last = out[out.length - 1];
    if (last && last.space === space) last.chars.push(ch);
    else out.push({ space, chars: [ch] });
  }
  return out;
}

/**
 * Split-letter heading. The heading keeps a readable accessible name via
 * aria-label while the animated characters are hidden from assistive tech.
 * Pure CSS (`.char`), so it renders on the server and settles instantly
 * under prefers-reduced-motion.
 */
export function SplitHeading({
  lines,
  as = "h1",
  className,
  lineClassNames = [],
  start = 0.1,
  step = 0.04,
  lineGap = 0.1,
}: SplitHeadingProps) {
  const label = lines.join(" ").replace(/- /g, "");
  let delay = start;

  return createElement(
    as,
    { "aria-label": label, className },
    lines.map((line, li) => {
      const chars = splitChars(line, delay, step);
      delay += line.length * step + lineGap;
      return (
        <span
          key={li}
          aria-hidden="true"
          className={cn("block", lineClassNames[li])}
        >
          {words(chars).map((word, wi) =>
            word.space ? (
              " "
            ) : (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.chars.map((ch, i) => (
                  <span key={i} className="char" style={{ animationDelay: ch.d }}>
                    {ch.c}
                  </span>
                ))}
              </span>
            )
          )}
        </span>
      );
    })
  );
}
