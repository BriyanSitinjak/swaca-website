import type { ServiceGroup } from "@/content/site";
import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { CtaLink } from "@/components/ui/CtaLink";
import { IconBadge } from "@/components/ui/IconBadge";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatCtaLabel } from "@/components/ui/SiteIcon";
import { bodyText, cardShadow, primaryButtonBlock } from "@/components/ui/styles";

function PriceCard({ group }: { group: ServiceGroup }) {
  const featured = Boolean(group.badge);

  return (
    <article
      className={`flex flex-col rounded-3xl bg-white p-6 ${cardShadow} ${featured ? "border-2 border-[#0B82B4]" : "border border-[#E3EEF4]"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <IconBadge name={group.icon} />
        {group.badge ? (
          <span className="rounded-full bg-[#E7F4FB] px-2.5 py-1 text-xs font-semibold text-[#0B82B4]">{group.badge}</span>
        ) : null}
      </div>
      <h2 className="mt-4 text-xl font-bold text-[#102A3A]">{group.title}</h2>
      <p className={`mt-2 ${bodyText}`}>{group.description}</p>
      <div className="mt-5">
        <PriceLines lines={group.lines} compact />
      </div>
      <CtaLink cta={group.cta} className={`mt-6 ${primaryButtonBlock}`}>
        <ChatCtaLabel label={group.cta.label} />
      </CtaLink>
    </article>
  );
}

export function PriceGroups() {
  const { layanan } = site;

  return (
    <PageSection pad="page">
        <SectionHeading as="h1" eyebrow={layanan.eyebrow} title={layanan.title} description={layanan.intro} />
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
          {layanan.groups.map((group) => (
            <PriceCard key={group.id} group={group} />
          ))}
        </div>
    </PageSection>
  );
}
