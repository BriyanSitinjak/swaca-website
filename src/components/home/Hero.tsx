import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SiteIcon } from "@/components/ui/SiteIcon";

const primaryButton =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B82B4] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#086F9A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4] sm:w-auto";

const secondaryButton =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D5E3EC] bg-white px-5 py-3 text-sm font-semibold text-[#153C4B] transition-colors hover:bg-[#F4FAFD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4] sm:w-auto";

export function Hero() {
  const home = site.home;

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-[#0B82B4] ring-1 ring-[#E3EEF4]">
              {home.eyebrow}
            </p>
            <h1 className="mt-5 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-[#102A3A] sm:text-5xl">
              {home.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5C7380]">{home.subtitle}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CtaLink cta={home.primaryCta} className={primaryButton}>
                <SiteIcon name="chat" className="h-4 w-4" />
                {home.primaryCta.label}
              </CtaLink>
              <CtaLink cta={home.secondaryCta} className={secondaryButton}>
                {home.secondaryCta.label}
              </CtaLink>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm text-[#5C7380] sm:flex-row sm:gap-5">
              <p className="inline-flex items-center gap-2">
                <SiteIcon name="clock" className="h-4 w-4 shrink-0 text-[#0B82B4]" />
                {site.hours.summary}
              </p>
              <p className="inline-flex items-center gap-2">
                <SiteIcon name="pin" className="h-4 w-4 shrink-0 text-[#0B82B4]" />
                {site.address.areaLabel}
              </p>
            </div>
          </div>
          <PhotoSlot photo={home.heroPhoto} className="min-h-[240px] sm:min-h-[320px] lg:min-h-[380px]" />
        </div>
      </Container>
    </section>
  );
}
