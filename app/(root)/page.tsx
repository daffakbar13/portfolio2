import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { Icons } from "@/components/common/icons";
import { HeroScene } from "@/components/home/hero-scene";
import { Blobs } from "@/components/motion/blobs";
import { Magnetic } from "@/components/motion/magnetic";
import { Marquee } from "@/components/motion/marquee";
import { SplitHeading } from "@/components/motion/split-heading";
import { TiltCard } from "@/components/motion/tilt-card";
import { TiltPermission } from "@/components/motion/tilt-permission";
import { careerExperiences } from "@/config/career";
import { featuredExperiences } from "@/config/experience";
import { homeConfig } from "@/config/home";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import {
  projectCover,
  projectPeriod,
  projectTagline,
  projectTitle,
} from "@/lib/experience";
import { stats, withStats } from "@/lib/stats";
import { cn, formatYears } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

const { hero, about, work, journey, cta } = homeConfig;
const bento = homeConfig.skills;

function Bars({ value, tone = "lime" }: { value: number; tone?: "lime" | "ink" }) {
  return (
    <span className="flex gap-1" aria-label={`${value} out of 5`} role="img">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={cn(
            "h-1.5 w-[22px] rounded-[3px]",
            n <= value ? (tone === "lime" ? "bg-lime" : "bg-ink") : "bg-track"
          )}
        />
      ))}
    </span>
  );
}

const stackTints = ["", "tint-violet", "tint-lime"];

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  const frontend = bento.frontend.items.map((name) => ({
    name,
    rating: skills.find((s) => s.name === name)?.rating ?? 5,
  }));
  const career = careerExperiences
    .slice()
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  const statItems = [
    { value: `${stats.years}+`, label: "years shipping", short: "years" },
    { value: String(stats.companies), label: "companies", short: "companies" },
    { value: String(stats.projects), label: "projects delivered", short: "projects" },
  ];

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate mx-auto flex max-w-[1280px] flex-col gap-0 px-4 pb-16 pt-6 md:flex-row md:flex-wrap md:items-center md:gap-12 md:px-8 md:pb-[72px] md:pt-24">
        <Blobs
          items={[
            { layer: "a", color: "lime", opacity: 0.4, className: "right-[20%] top-[16%] h-[180px] w-[180px] md:h-[360px] md:w-[360px]" },
            { layer: "b", color: "violet", opacity: 0.55, delay: -6, className: "right-0 top-[48%] h-[170px] w-[170px] md:h-[320px] md:w-[320px]" },
          ]}
        />
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 -z-10" />

        <HeroScene faces={hero.cubeFaces} hint={hero.sceneHint} />

        <div className="relative order-first flex min-w-0 flex-col gap-[18px] md:order-none md:flex-[1_1_560px] md:gap-7">
          <div className="order-1 flex flex-wrap items-center gap-2 md:order-none">
            <div className="glass inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 font-mono text-[11px] text-mute md:px-3.5 md:py-2 md:text-[13px]">
              <span className="pulse h-2 w-2 rounded-full bg-lime" />
              <span className="md:hidden">{hero.badgeShort}</span>
              <span className="hidden md:inline">{hero.badge}</span>
            </div>
            <TiltPermission />
          </div>
          <SplitHeading
            lines={hero.headingLines}
            step={0.035}
            lineGap={0.03}
            className="order-2 m-0 font-display text-[56px] font-bold leading-[0.92] tracking-[-0.045em] md:order-none md:text-[clamp(56px,6.2vw,104px)]"
            lineClassNames={[undefined, undefined, "text-lime-ink"]}
          />
          <p className="order-3 m-0 max-w-[520px] text-[15px] leading-[1.55] text-mute md:order-none md:text-lg md:leading-relaxed">
            <span className="md:hidden">{hero.introShort}</span>
            <span className="hidden md:inline">
              I&apos;m <span className="text-fg">{siteConfig.authorName}</span>.{" "}
              {hero.intro}
            </span>
          </p>
          <div className="order-4 flex gap-2.5 md:order-none md:flex-wrap md:gap-3">
            <Magnetic className="flex-1 md:flex-none">
              <Link href={hero.primaryCta.href} className="btn-lime w-full">
                <span className="md:hidden">{hero.primaryCta.shortLabel}</span>
                <span className="hidden md:inline">{hero.primaryCta.label}</span>
                <ArrowRight className="hidden h-[18px] w-[18px] md:block" aria-hidden="true" />
              </Link>
            </Magnetic>
            <Magnetic className="flex-1 md:flex-none">
              <Link href={hero.secondaryCta.href} className="btn-glass glass liquid w-full">
                <span className="md:hidden">{hero.secondaryCta.shortLabel}</span>
                <span className="hidden md:inline">{hero.secondaryCta.label}</span>
              </Link>
            </Magnetic>
            <a
              href={siteConfig.links.github}
              aria-label="GitHub profile"
              target="_blank"
              rel="noreferrer"
              className="lift glass hidden h-[52px] w-[52px] items-center justify-center rounded-full text-fg md:inline-flex"
            >
              <Icons.gitHub className="h-5 w-5" />
            </a>
          </div>
          <dl className="order-5 flex justify-between gap-10 border-t border-line/[.08] pt-3.5 md:order-none md:justify-start md:pt-3">
            {statItems.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-xs text-mute md:text-[13px]">
                  <span className="md:hidden">{s.short}</span>
                  <span className="hidden md:inline">{s.label}</span>
                </dt>
                <dd className="m-0 font-display text-[28px] font-semibold md:text-[40px]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Marquee items={homeConfig.marquee} />

      {/* ABOUT */}
      <section className="mx-auto max-w-[1180px] px-4 py-24 md:px-8 md:py-40">
        <div className="eyebrow mb-7">{about.eyebrow}</div>
        <p className="filltext m-0 font-display text-[clamp(28px,4.4vw,60px)] font-semibold leading-[1.12] tracking-[-0.03em]">
          {withStats(about.statement)}
        </p>
      </section>

      {/* SKILLS BENTO */}
      <section className="mx-auto max-w-[1280px] px-4 pb-24 md:px-8 md:pb-40">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">{bento.eyebrow}</div>
            <h2 className="h-section m-0">{bento.heading}</h2>
          </div>
          <Link href="/skills" className="link-underline text-[15px]">
            {bento.linkLabel.replace("{count}", String(skills.length))}
          </Link>
        </div>
        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          <div className="asm flex md:col-span-2 md:row-span-2" style={{ ["--asm-ry" as string]: "-30deg", animationRange: "entry 0% cover 30%" }}>
            <TiltCard className="flex flex-1 flex-col justify-between gap-8 rounded-[28px] border border-line/[.08] bg-surface p-7 md:p-8">
              <div aria-hidden="true" className="absolute -right-[60px] -top-[60px] h-[260px] w-[260px] rounded-full border-[40px] border-lime/[.16]" />
              <div className="relative">
                <div className="font-mono text-xs text-mute">{bento.frontend.label}</div>
                <h3 className="mt-3 font-display text-[32px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[40px]">
                  {bento.frontend.heading}
                </h3>
              </div>
              <ul className="relative flex flex-col gap-3.5">
                {frontend.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-4 border-b border-line/[.06] pb-3.5">
                    <span className="text-[17px] font-medium">{s.name}</span>
                    <Bars value={s.rating} />
                  </li>
                ))}
              </ul>
            </TiltCard>
          </div>
          <div className="asm flex" style={{ ["--asm-ry" as string]: "28deg", animationRange: "entry 5% cover 35%" }}>
            <TiltCard className="flex flex-1 flex-col justify-between gap-5 rounded-[28px] bg-lime p-7 text-ink">
              <div className="font-mono text-xs">{bento.backend.label}</div>
              <div className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em]">{bento.backend.heading}</div>
              <div className="text-sm">{bento.backend.body}</div>
            </TiltCard>
          </div>
          <div className="asm flex" style={{ ["--asm-ry" as string]: "-22deg", animationRange: "entry 10% cover 40%" }}>
            <TiltCard className="flex flex-1 flex-col justify-between gap-5 rounded-[28px] border border-line/[.08] bg-surface p-7">
              <div className="font-mono text-xs text-mute">{bento.data.label}</div>
              <div className="flex flex-wrap gap-2">
                {bento.data.items.map((d) => (
                  <span key={d} className="rounded-full bg-surface-2 px-3.5 py-2 text-sm">{d}</span>
                ))}
              </div>
            </TiltCard>
          </div>
          <div className="asm flex" style={{ ["--asm-ry" as string]: "32deg", animationRange: "entry 15% cover 45%" }}>
            <TiltCard className="flex flex-1 flex-col justify-between gap-5 rounded-[28px] border border-line/[.08] bg-surface p-7">
              <div className="font-mono text-xs text-mute">{bento.mobile.label}</div>
              <div className="font-display text-[30px] font-bold tracking-[-0.03em]">{bento.mobile.heading}</div>
              <div className="text-sm text-mute">{bento.mobile.body}</div>
            </TiltCard>
          </div>
          <div className="asm flex" style={{ ["--asm-ry" as string]: "-26deg", animationRange: "entry 20% cover 50%" }}>
            <TiltCard className="flex flex-1 flex-col justify-between gap-5 rounded-[28px] bg-violet p-7 text-ink">
              <div className="font-mono text-xs">{bento.languages.label}</div>
              <div className="flex flex-col gap-1.5 font-display text-[22px] font-semibold">
                {bento.languages.items.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SELECTED WORK: sticky stack */}
      <section className="relative isolate mx-auto max-w-[1280px] px-4 pb-24 md:px-8 md:pb-[120px]">
        <Blobs
          items={[
            { layer: "a", color: "lime", opacity: 0.32, className: "-left-[6%] top-[220px] h-[320px] w-[320px] md:h-[520px] md:w-[520px]" },
            { layer: "b", color: "violet", opacity: 0.5, delay: -5, className: "-right-[4%] top-[700px] h-[300px] w-[300px] md:h-[480px] md:w-[480px]" },
            { layer: "c", color: "cyan", opacity: 0.22, delay: -10, className: "left-[30%] top-[1200px] h-[260px] w-[260px] md:h-[420px] md:w-[420px]" },
          ]}
        />
        <div className="reveal mb-12">
          <div className="eyebrow mb-4">{work.eyebrow}</div>
          <h2 className="h-section m-0">{work.heading}</h2>
        </div>
        <div className="flex flex-col gap-8">
          {featuredExperiences.map((exp, i) => {
            const cover = projectCover(exp);
            return (
              <Link
                key={exp.id}
                href={`/experience/${exp.id}`}
                className={cn(
                  "stackcard glass sticky flex min-h-[460px] flex-col gap-8 rounded-[32px] p-6 text-fg md:flex-row md:flex-wrap md:gap-10 md:p-10",
                  stackTints[i % stackTints.length]
                )}
                style={{ top: 96 + i * 30 }}
              >
                <div className="flex min-w-0 flex-col justify-between gap-6 md:flex-[1_1_360px]">
                  <div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {exp.category.slice(0, 2).map((c) => (
                        <span key={c} className="chip-outline">{c}</span>
                      ))}
                    </div>
                    <h3 className="m-0 font-display text-[40px] font-bold leading-none tracking-[-0.04em] md:text-[56px]">
                      {projectTitle(exp)}
                    </h3>
                    <p className={cn("mt-4 text-base leading-relaxed", i === 0 ? "text-mute" : "text-fg-2")}>
                      {exp.companyName !== projectTitle(exp) && exp.companyName !== "Confidential"
                        ? `${exp.companyName} — `
                        : ""}
                      {projectTagline(exp)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[13px] text-mute">
                    <span>{projectPeriod(exp).toUpperCase()}</span>
                    <span className="text-lime-ink">{work.cardCta}</span>
                  </div>
                </div>
                <div className="flex min-h-[220px] min-w-0 flex-col overflow-hidden rounded-[20px] border border-line/[.08] bg-surface-2 md:min-h-[340px] md:flex-[1_1_480px]">
                  <div className="flex gap-1.5 border-b border-line/[.06] px-3.5 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-fill-dim" />
                    <span className="h-2.5 w-2.5 rounded-full bg-fill-dim" />
                    <span className="h-2.5 w-2.5 rounded-full bg-fill-dim" />
                  </div>
                  <div className="relative flex-1">
                    {cover && (
                      <Image
                        src={cover}
                        alt={`${projectTitle(exp)} screenshot`}
                        fill
                        sizes="(min-width: 768px) 560px, 100vw"
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-14 flex justify-center">
          <Link href="/experience" className="btn-glass lift glass liquid">
            {withStats(work.allLabel)}
          </Link>
        </div>
      </section>

      {/* CAREER RAIL */}
      <section className="mx-auto max-w-[1280px] px-4 pb-24 pt-20 md:px-8 md:pb-40">
        <div className="reveal mb-16">
          <div className="eyebrow mb-4">{journey.eyebrow}</div>
          <h2 className="h-section m-0">{withStats(journey.heading)}</h2>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-[7px] hidden h-0.5 bg-line/[.08] md:block" />
          <div className="grow absolute inset-x-0 top-[7px] hidden h-0.5 origin-left bg-lime md:block" />
          <ol className="relative m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-0">
            {career.map((c) => {
              const current = c.endDate === "Present";
              return (
                <li key={c.id} className="reveal flex flex-col gap-3.5">
                  <span
                    className={cn(
                      "h-4 w-4 rounded-full border-2 bg-canvas",
                      current ? "border-lime" : "border-mute"
                    )}
                  />
                  <span className="font-mono text-[13px] text-mute">{formatYears(c.startDate, c.endDate)}</span>
                  <Link
                    href={`/career/${c.id}`}
                    className="font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] hover:text-lime-ink"
                  >
                    {c.company}
                  </Link>
                  <span className="text-sm text-mute">{c.position}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-12">
          <Link href="/career" className="link-underline">
            {journey.linkLabel}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate mx-auto max-w-[1280px] px-4 md:px-8">
        <Blobs
          items={[
            { layer: "b", color: "lime", opacity: 0.32, className: "left-[8%] top-10 h-[300px] w-[300px] md:h-[460px] md:w-[460px]" },
            { layer: "a", color: "violet", opacity: 0.45, delay: -7, className: "right-[8%] top-40 h-[280px] w-[280px] md:h-[420px] md:w-[420px]" },
          ]}
        />
        <div className="reveal glass relative flex flex-col items-start gap-9 overflow-hidden rounded-[32px] px-6 py-16 md:rounded-[40px] md:px-14 md:py-24">
          <div aria-hidden="true" className="ring absolute -right-[120px] -top-10 h-[520px] w-[520px] rounded-full border border-lime/40" />
          <div aria-hidden="true" className="ring2 absolute -right-10 top-10 h-[360px] w-[360px] rounded-full border border-dashed border-line/[.14]" />
          <div className="eyebrow relative">{cta.eyebrow}</div>
          <h2 className="relative m-0 max-w-[900px] font-display text-[clamp(44px,7vw,104px)] font-bold leading-[0.95] tracking-[-0.045em]">
            {cta.heading}
          </h2>
          <div className="relative flex flex-wrap gap-3">
            <Magnetic>
              <a href={`mailto:${siteConfig.email}`} className="btn-lime h-[60px] px-[30px] text-base md:text-lg">
                {siteConfig.email}
              </a>
            </Magnetic>
            <Link href={cta.secondary.href} className="btn-glass lift glass h-[60px] px-[30px] md:text-lg">
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
