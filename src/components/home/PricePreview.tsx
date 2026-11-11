import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";

const textLink =
  "font-semibold text-[#0B82B4] underline decoration-[#0B82B4]/30 underline-offset-4 transition-colors hover:text-[#086F9A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4]";

const card = "rounded-3xl border border-[#E3EEF4] bg-white p-6 shadow-[0_8px_30px_rgba(16,42,58,0.04)]";

export function PricePreview() {
  const { pricePreview } = site.home;

  return (
    <section className="bg-[#EAF4FB] pt-16 sm:pt-20">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <SectionHeading eyebrow={pricePreview.eyebrow} title={pricePreview.title} />
            <div className={`mt-6 ${card}`}>
              <ul className="divide-y divide-[#E6EEF3]">
                {pricePreview.lines.map((line) => (
                  <li key={line.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="text-[#102A3A]">{line.name}</span>
                    <span className="shrink-0 font-bold text-[#102A3A]">{line.priceLabel}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CtaLink cta={pricePreview.detailCta} className={`mt-4 inline-flex text-sm ${textLink}`}>
              {pricePreview.detailCta.label}
            </CtaLink>
          </div>

          <div className={card}>
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

const closingButton =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#153C4B] transition-colors hover:bg-[#F4FAFD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto";

export function ClosingCta() {
  const { closing } = site.home;

  return (
    <section className="bg-[#EAF4FB] py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl bg-[#0B82B4] px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{closing.title}</h2>
            <p className="mt-2 text-white/85">{closing.subtitle}</p>
          </div>
          <CtaLink cta={closing.cta} className={closingButton}>
            <SiteIcon name="chat" className="h-4 w-4" />
            {closing.cta.label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
