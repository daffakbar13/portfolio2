import { Metadata } from "next";

import { Globe } from "@/components/contact/globe";
import { ContactForm } from "@/components/forms/contact-form";
import { SplitHeading } from "@/components/motion/split-heading";
import { pageCopy } from "@/config/home";
import { pagesConfig } from "@/config/pages";
import { SocialLinks } from "@/config/socials";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

const copy = pageCopy.contact;

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 pb-24 pt-16 md:flex-row md:flex-wrap md:gap-16 md:px-8 md:pb-[120px] md:pt-24">
      <div className="flex min-w-0 flex-col gap-8 md:flex-[1_1_440px]">
        <div className="eyebrow">{copy.eyebrow}</div>
        <SplitHeading
          lines={[...copy.headingLines]}
          className="m-0 font-display text-[clamp(56px,7vw,112px)] font-bold leading-[0.9] tracking-[-0.05em]"
        />
        <p className="m-0 max-w-[420px] text-base leading-relaxed text-mute md:text-lg">{copy.intro}</p>
        <Globe places={copy.places.map((p) => ({ ...p }))} />
        <ul className="m-0 flex list-none flex-col border-t border-line/[.08] p-0">
          {SocialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.link}
                target={s.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line/[.08] px-3 py-[22px] transition-colors hover:bg-surface"
              >
                <span className="font-display text-2xl font-semibold group-hover:text-lime-ink">
                  {s.name === "Gmail" ? "Email" : s.name}
                </span>
                <span className="truncate text-sm text-mute">
                  {s.name === "Gmail" ? s.link.replace("mailto:", "") : s.username} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ContactForm title={copy.formTitle} note={copy.replyNote} />
    </section>
  );
}
