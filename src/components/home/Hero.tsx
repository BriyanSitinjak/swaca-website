import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { CtaLink } from "@/components/ui/CtaLink";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { ChatCtaLabel, SiteIcon } from "@/components/ui/SiteIcon";
import { accentIcon, primaryButton, proseText, secondaryButton } from "@/components/ui/styles";

export function Hero() {
  const home = site.home;

  return (
    <PageSection pad="page">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-[#0B82B4] ring-1 ring-[#E3EEF4]">
              {home.eyebrow}
            </p>
            <h1 className="mt-5 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-[#102A3A] sm:text-5xl">
              {home.title}
            </h1>
            <p className={`mt-4 max-w-xl ${proseText}`}>{home.subtitle}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CtaLink cta={home.primaryCta} className={primaryButton}>
                <ChatCtaLabel label={home.primaryCta.label} />
              </CtaLink>
              <CtaLink cta={home.secondaryCta} className={secondaryButton}>
                {home.secondaryCta.label}
              </CtaLink>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm text-[#5C7380] sm:flex-row sm:gap-5">
              <p className="inline-flex items-center gap-2">
                <SiteIcon name="clock" className={accentIcon} />
                {site.hours.summary}
              </p>
              <p className="inline-flex items-center gap-2">
                <SiteIcon name="pin" className={accentIcon} />
                {site.address.areaLabel}
              </p>
            </div>
          </div>
          <PhotoSlot photo={home.heroPhoto} className="min-h-[240px] sm:min-h-[320px] lg:min-h-[380px]" />
        </div>
    </PageSection>
  );
}
