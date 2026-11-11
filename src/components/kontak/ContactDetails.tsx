import type { ReactNode } from "react";
import type { IconName } from "@/content/site";
import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { MapFrame } from "@/components/kontak/MapFrame";
import { CtaLink } from "@/components/ui/CtaLink";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatCtaLabel } from "@/components/ui/SiteIcon";
import { bodyText, inlineTextLink, primaryButtonBlock, surface } from "@/components/ui/styles";

function InfoCard({ icon, label, children }: { icon: IconName; label: string; children: ReactNode }) {
  return (
    <article className={`flex gap-4 p-5 ${surface}`}>
      <IconBadge name={icon} />
      <div className="min-w-0">
        <h2 className="font-bold text-[#102A3A]">{label}</h2>
        {children}
      </div>
    </article>
  );
}

function HoursLines() {
  const detailed = site.hours.rows.filter((row) => !row.includes("["));
  const lines = detailed.length > 0 ? detailed : [site.hours.summary];

  return (
    <div className={`mt-1 space-y-1 ${bodyText}`}>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

export function ContactDetails() {
  const { kontak } = site;

  return (
    <PageSection pad="page">
        <SectionHeading as="h1" className="max-w-3xl" eyebrow={kontak.eyebrow} title={kontak.title} description={kontak.intro} />

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-4">
            <InfoCard icon={kontak.addressIcon} label={kontak.addressLabel}>
              <p className={`mt-1 text-pretty ${bodyText}`}>{site.address.display}</p>
            </InfoCard>
            <InfoCard icon={kontak.hoursIcon} label={kontak.hoursLabel}>
              <HoursLines />
            </InfoCard>
            <InfoCard icon={kontak.whatsappIcon} label={kontak.whatsappLabel}>
              <CtaLink cta={kontak.whatsappCta} className={`mt-1 ${inlineTextLink}`}>
                {site.contact.whatsappDisplay}
              </CtaLink>
            </InfoCard>
            <CtaLink cta={kontak.pickupCta} className={primaryButtonBlock}>
              <ChatCtaLabel label={kontak.pickupCta.label} />
            </CtaLink>
          </div>

          <MapFrame />
        </div>
    </PageSection>
  );
}
