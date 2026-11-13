"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { routesConfig } from "@/config/routes";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

import { BrandLink } from "./brand-link";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  title: string;
  href: string;
}

const items = routesConfig.mainNav as NavItem[];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  return (
    <header
      className="sticky top-0 z-50 flex justify-center px-4 pt-4 md:top-4 md:px-6"
      style={{ viewTransitionName: "site-header" }}
    >
      {/* Desktop: floating glass pill */}
      <nav
        aria-label="Main"
        className="glass liquid hidden w-full max-w-[1100px] items-center justify-between gap-7 rounded-full py-2.5 pl-5 pr-2.5 md:flex"
      >
        <BrandLink />
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
          {items.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("navlink", active && "text-fg")}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/resume"
            className="lift inline-flex h-11 items-center rounded-full bg-fg px-5 text-sm font-semibold text-canvas"
          >
            Resume ↗
          </Link>
        </div>
      </nav>

      {/* Mobile: logo + menu button */}
      <div className="flex w-full items-center justify-between md:hidden">
        <BrandLink />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-fg"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Portalled to <body>: the header has a view-transition-name, which
          would otherwise flatten the menu's backdrop. */}
      {open &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="menu-in fixed inset-0 z-[60] flex flex-col px-4 pb-8 pt-5 text-fg md:hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(200,255,61,0.16), rgba(139,124,255,0.16)), var(--menu-base)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
            }}
          >
            <div className="flex items-center justify-between">
              <BrandLink onClick={close} />
              <button
                ref={closeButton}
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-fg"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-1.5"
            >
              {[{ title: "Home", href: "/" }, ...items].map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-display text-[52px] font-bold leading-[1.1] tracking-[-0.04em]",
                      active ? "text-lime-ink" : "text-fg"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="mt-2 font-display text-2xl font-semibold text-mute"
              >
                Resume ↗
              </Link>
            </nav>
            <div className="flex flex-wrap gap-5 text-[15px] font-semibold">
              {SocialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  className="text-lime-ink"
                  target={s.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {s.name === "Gmail" ? "Email" : s.name} ↗
                </a>
              ))}
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
