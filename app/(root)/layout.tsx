import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PointerParallax } from "@/components/motion/pointer-parallax";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <PointerParallax />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
