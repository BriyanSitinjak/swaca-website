import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { CtaLink } from "@/components/ui/CtaLink";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bodyText, cardTitle, chip, inlineTextLink, surfaceCard, textLink } from "@/components/ui/styles";

const previewCard = `flex h-full flex-col ${surfaceCard}`;
const previewLink = `mt-auto pt-5 ${inlineTextLink}`;

export function PricePreview() {
  const { pricePreview } = site.home;

  return (
    <PageSection tone="soft" pad="top">
      <SectionHeading eyebrow={pricePreview.eyebrow} title={pricePreview.title} />
      <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
        <div className={previewCard}>
          <PriceLines lines={pricePreview.lines} />
          <CtaLink cta={pricePreview.detailCta} className={previewLink}>
            {pricePreview.detailCta.label}
          </CtaLink>
        </div>

        <div className={previewCard}>
          <h3 className={cardTitle}>{pricePreview.areaTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.areas.map((area) => (
              <li key={area} className={`bg-[#E7F4FB] ${chip}`}>
                {area}
              </li>
            ))}
          </ul>
          <p className={`mt-4 ${bodyText}`}>
            {pricePreview.areaMissingNote}{" "}
            <CtaLink cta={pricePreview.areaMissingCta} className={textLink}>
              {pricePreview.areaMissingCta.label}
            </CtaLink>
          </p>
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
