"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import logoMark from "@/asset/logo-mark.png";
import { site } from "@/content/site";
import { normalizePath } from "@/lib/seo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Container } from "./Container";

const waButtonClass =
  "items-center justify-center gap-2 rounded-full bg-[#0B82B4] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#086F9A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4]";

function navClass(active: boolean, mobile = false) {
  const layout = mobile ? "block w-full px-3 py-3 text-base" : "px-4 py-2 text-sm";
  const state = active
    ? "bg-[#E7F4FB] font-semibold text-[#153C4B]"
    : "font-medium text-[#4E6572] hover:bg-[#E7F4FB]/80";
  return `rounded-full ${layout} ${state}`;
}

export function Header() {
  const pathname = usePathname();
  const current = normalizePath(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E3EEF4] bg-[#F6FAFD]/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" aria-label={site.business.logoAlt} className="flex min-w-0 items-center gap-2.5">
            <Image src={logoMark} alt="" width={40} height={40} priority className="h-10 w-10 shrink-0" />
            <span className="min-w-0">
              <span className="block text-[1.15rem] leading-none font-extrabold tracking-tight text-[#153C4B]">
                {site.business.name}
              </span>
              <span className="mt-1 block text-[0.62rem] leading-none font-semibold tracking-[0.14em] text-[#0B82B4]">
                {site.business.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label={site.footer.menuTitle}>
            {site.nav.map((item) => {
              const active = current === normalizePath(item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={navClass(active)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <WhatsAppLink cta={site.ctas.header} className={`${waButtonClass} hidden shrink-0 md:inline-flex`}>
            <LuMessageCircle className="h-4 w-4" aria-hidden />
            {site.ctas.header.label}
          </WhatsAppLink>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#153C4B] hover:bg-[#E7F4FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4] md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? site.chrome.closeMenuLabel : site.chrome.openMenuLabel}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <HiOutlineX className="h-6 w-6" aria-hidden /> : <HiOutlineMenu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="site-menu" className="border-t border-[#E3EEF4] bg-[#F6FAFD] md:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-1" aria-label={site.footer.menuTitle}>
              {site.nav.map((item) => {
                const active = current === normalizePath(item.href);
                return (
                  <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={navClass(active, true)}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <WhatsAppLink cta={site.ctas.header} className={`${waButtonClass} mt-3 flex w-full`}>
              <LuMessageCircle className="h-4 w-4" aria-hidden />
              {site.ctas.header.label}
            </WhatsAppLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
