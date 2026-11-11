"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Cta } from "@/content/site";
import { pageIdFromPathname } from "@/lib/seo";
import { buildWaLink } from "@/lib/whatsapp";

type CtaLinkProps = {
  cta: Cta;
  className?: string;
  children?: ReactNode;
  /** Use the CTA label as the accessible name when the visible content is only an icon. */
  labelAsAria?: boolean;
};

export function CtaLink({ cta, className, children, labelAsAria = false }: CtaLinkProps) {
  const page = pageIdFromPathname(usePathname());
  const content = children ?? cta.label;
  const ariaLabel = labelAsAria ? cta.label : undefined;

  if (cta.kind === "whatsapp") {
    return (
      <a
        href={buildWaLink(cta.message)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-id={cta.id}
        data-page={page}
        className={className}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} data-cta-id={cta.id} data-page={page} className={className} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
