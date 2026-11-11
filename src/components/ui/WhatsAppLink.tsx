"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { WhatsAppCta } from "@/content/site";
import { pageIdFromPathname } from "@/lib/seo";
import { buildWaLink } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  cta: WhatsAppCta;
  className?: string;
  children: ReactNode;
  /** Use the CTA label as the accessible name when the visible content is only an icon. */
  labelAsAria?: boolean;
};

export function WhatsAppLink({ cta, className, children, labelAsAria = false }: WhatsAppLinkProps) {
  const page = pageIdFromPathname(usePathname());

  return (
    <a
      href={buildWaLink(cta.message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-id={cta.id}
      data-page={page}
      className={className}
      aria-label={labelAsAria ? cta.label : undefined}
    >
      {children}
    </a>
  );
}
