import { site, type ServiceGroup } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { CtaLink } from "@/components/ui/CtaLink";
import { IconBadge } from "@/components/ui/IconBadge";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatCtaLabel } from "@/components/ui/SiteIcon";
import { cardBody, primaryButtonBlock, surfaceCard } from "@/components/ui/styles";

function PriceCard({ group }: { group: ServiceGroup }) {
  return (
    <article className={`flex flex-col ${surfaceCard}`}>
      <IconBadge name={group.icon} />
      <h2 className="mt-4 text-xl font-bold text-[#102A3A]">{group.title}</h2>
      <p className={cardBody}>{group.description}</p>
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
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          {layanan.groups.map((group) => (
            <PriceCard key={group.id} group={group} />
          ))}
        </div>
    </PageSection>
  );
}
