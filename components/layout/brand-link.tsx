import Link from "next/link";

import { siteConfig } from "@/config/site";

export function BrandLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 font-display text-[17px] font-bold tracking-[-0.02em] text-fg md:text-lg"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-lime text-[13px] text-ink md:text-sm"
      >
        {siteConfig.initials}
      </span>
      {siteConfig.brand}
    </Link>
  );
}
