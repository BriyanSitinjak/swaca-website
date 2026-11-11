import Link from "next/link";
import { site } from "@/content/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "./Container";

const columnTitleClass = "text-sm font-semibold text-white";
const linkClass = "text-sm text-white/75 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-[#083850] text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <p className="text-lg font-extrabold tracking-tight">{site.business.name}</p>
            <p className={`mt-3 ${linkClass}`}>{site.business.description}</p>
          </div>

          <div>
            <p className={columnTitleClass}>{site.footer.addressTitle}</p>
            <p className={`mt-3 ${linkClass}`}>{site.address.streetAddress}</p>
            <p className={`mt-1 ${linkClass}`}>{site.hours.summary}</p>
          </div>

          <nav aria-label={site.footer.menuTitle}>
            <p className={columnTitleClass}>{site.footer.menuTitle}</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={columnTitleClass}>{site.footer.followTitle}</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={site.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {site.footer.instagramLabel}
                </a>
              </li>
              <li>
                <CtaLink cta={site.ctas.footerWhatsapp} className={linkClass}>
                  {site.ctas.footerWhatsapp.label}
                </CtaLink>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 pr-16 text-sm text-white/65">{site.footer.copyright}</p>
      </Container>
    </footer>
  );
}
