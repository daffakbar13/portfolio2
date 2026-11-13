import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 pb-12 pt-10 text-sm text-mute md:px-10">
      <span>
        © {new Date().getFullYear()} {siteConfig.authorName} · Jakarta
      </span>
      <div className="flex gap-6">
        {SocialLinks.map((s) => (
          <a
            key={s.name}
            className="navlink"
            href={s.link}
            target={s.link.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            {s.name === "Gmail" ? "Email" : s.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
