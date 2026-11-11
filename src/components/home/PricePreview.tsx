import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { CtaLink } from "@/components/ui/CtaLink";
import { PriceLines } from "@/components/ui/PriceLines";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { surfaceCard, textLink } from "@/components/ui/styles";

export function PricePreview() {
  const { pricePreview } = site.home;

  return (
    <section className="bg-[#EAF4FB] pt-16 sm:pt-20">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <SectionHeading eyebrow={pricePreview.eyebrow} title={pricePreview.title} />
            <div className={`mt-6 ${surfaceCard}`}>
              <PriceLines lines={pricePreview.lines} />
            </div>
            <CtaLink cta={pricePreview.detailCta} className={`mt-4 inline-flex text-sm ${textLink}`}>
              {pricePreview.detailCta.label}
            </CtaLink>
          </div>

          <div className={surfaceCard}>
            <h3 className="text-lg font-bold text-[#102A3A]">{pricePreview.areaTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.areas.map((area) => (
                <li key={area} className="rounded-full bg-[#E7F4FB] px-3 py-1.5 text-sm text-[#153C4B]">
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[#5C7380]">
              {pricePreview.areaMissingNote}{" "}
              <CtaLink cta={pricePreview.areaMissingCta} className={textLink}>
                {pricePreview.areaMissingCta.label}
              </CtaLink>
            </p>
            <CtaLink cta={pricePreview.areaMapCta} className={`mt-3 inline-flex text-sm ${textLink}`}>
              {pricePreview.areaMapCta.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ClosingCta() {
  const { closing } = site.home;

  return (
    <section className="bg-[#EAF4FB] py-10 sm:py-14">
      <Container>
        <ClosingBanner title={closing.title} subtitle={closing.subtitle} cta={closing.cta} />
      </Container>
    </section>
  );
}
