import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { CtaLink } from "@/components/ui/CtaLink";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bodyText, cardTitle, chip, inlineTextLink, surfaceCard, textLink } from "@/components/ui/styles";

export function PricePreview() {
  const { pricePreview } = site.home;

  return (
    <PageSection tone="soft" pad="top">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <SectionHeading eyebrow={pricePreview.eyebrow} title={pricePreview.title} />
            <div className={`mt-6 ${surfaceCard}`}>
              <PriceLines lines={pricePreview.lines} />
            </div>
            <CtaLink cta={pricePreview.detailCta} className={`mt-4 ${inlineTextLink}`}>
              {pricePreview.detailCta.label}
            </CtaLink>
          </div>

          <div className={surfaceCard}>
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
            <CtaLink cta={pricePreview.areaMapCta} className={`mt-3 ${inlineTextLink}`}>
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
