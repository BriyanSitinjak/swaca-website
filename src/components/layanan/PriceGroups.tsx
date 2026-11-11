import type { ServiceGroup } from "@/content/site";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { IconBadge } from "@/components/ui/IconBadge";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { cardShadow, primaryButtonBlock } from "@/components/ui/styles";

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
      <p className="mt-2 text-sm leading-relaxed text-[#5C7380]">{group.description}</p>
      <div className="mt-5">
        <PriceLines lines={group.lines} compact />
      </div>
      <CtaLink cta={group.cta} className={`mt-6 ${primaryButtonBlock}`}>
        <SiteIcon name="chat" className="h-4 w-4" />
        {group.cta.label}
      </CtaLink>
    </article>
  );
}

export function PriceGroups() {
  const { layanan } = site;

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <SectionHeading as="h1" eyebrow={layanan.eyebrow} title={layanan.title} description={layanan.intro} />
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
          {layanan.groups.map((group) => (
            <PriceCard key={group.id} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
