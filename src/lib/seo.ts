import type { Metadata } from "next";
import { site, type PageId, type PageSeo } from "@/content/site";

const CLOCK_TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

export function getPageSeo(pageId: PageId): PageSeo {
  const page = site.seo.pages.find((item) => item.id === pageId);
  if (!page) {
    throw new Error(`Unknown page: ${pageId}`);
  }
  return page;
}

export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname || "/";
}

export function pageIdFromPathname(pathname: string): PageId {
  const path = normalizePath(pathname);
  const match = site.seo.pages.find((page) => page.path === path);
  return match?.id ?? "beranda";
}

export function pageUrl(path: PageSeo["path"]): string {
  const base = site.business.url.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path}/`;
}

export function buildPageMetadata(pageId: PageId): Metadata {
  const page = getPageSeo(pageId);
  const url = pageUrl(page.path);
  const imageUrl = new URL(site.seo.ogImage, site.business.url).toString();

  return {
    metadataBase: new URL(site.business.url),
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: site.business.legalName,
      locale: site.business.locale.replace("-", "_"),
      type: "website",
      images: [{ url: imageUrl, alt: site.business.logoAlt }],
    },
  };
}

function isClockTime(value: string): boolean {
  return CLOCK_TIME.test(value);
}

/** Schema.org DryCleaningOrLaundry. Hours are omitted until opens/closes are HH:MM. */
export function buildLaundryJsonLd(): Record<string, unknown> {
  const openingHoursSpecification = site.hours.rows
    .filter((row) => isClockTime(row.opens) && isClockTime(row.closes))
    .map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.dayOfWeek,
      opens: row.opens,
      closes: row.closes,
    }));

  const sameAs = site.contact.instagramUrl.includes("[") ? [] : [site.contact.instagramUrl];

  return {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: site.business.legalName,
    url: pageUrl("/"),
    image: new URL(site.seo.ogImage, site.business.url).toString(),
    telephone: `+${site.contact.whatsappNumber.replace(/\D/g, "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    ...(openingHoursSpecification.length > 0 ? { openingHoursSpecification } : {}),
    areaServed: site.areas.map((name) => ({
      "@type": "Place",
      name,
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
