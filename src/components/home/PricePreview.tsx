import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { CtaLink } from "@/components/ui/CtaLink";
import { PickupSummary } from "@/components/ui/PickupPolicy";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardTitle, inlineTextLink, surfaceCard, twoColumnGrid } from "@/components/ui/styles";

const previewCard = `flex h-full flex-col ${surfaceCard}`;
const previewLink = `mt-auto pt-5 ${inlineTextLink}`;

export function PricePreview() {
  const { pricePreview } = site.home;

  return (
    <PageSection tone="soft" pad="top">
      <SectionHeading eyebrow={pricePreview.eyebrow} title={pricePreview.title} />
      <div className={twoColumnGrid}>
        <div className={previewCard}>
          <PriceLines lines={pricePreview.lines} />
          <CtaLink cta={pricePreview.detailCta} className={previewLink}>
            {pricePreview.detailCta.label}
          </CtaLink>
        </div>

        <div className={previewCard}>
          <h3 className={cardTitle}>{pricePreview.areaTitle}</h3>
          <PickupSummary />
          <CtaLink cta={pricePreview.areaMapCta} className={previewLink}>
            {pricePreview.areaMapCta.label}
          </CtaLink>
        </div>
      </div>
    </PageSection>
  );
}

export function ClosingCta() {
  const { closing } = site.home;

  return (
    <PageSection tone="soft" pad="tight">
        <ClosingBanner title={closing.title} subtitle={closing.subtitle} cta={closing.cta} />
    </PageSection>
  );
}
