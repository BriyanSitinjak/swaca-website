import type { Metadata } from "next";
import { site, type PageId, type PageSeo } from "@/content/site";

function getPageSeo(pageId: PageId): PageSeo {
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

function pageUrl(path: PageSeo["path"]): string {
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
