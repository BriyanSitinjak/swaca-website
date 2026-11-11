import type { WhatsAppCta } from "@/content/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { inverseButton } from "@/components/ui/styles";

export function ClosingBanner({ title, subtitle, cta }: { title: string; subtitle: string; cta: WhatsAppCta }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-[#0B82B4] px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
      <div className="max-w-xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-2 text-white/85">{subtitle}</p>
      </div>
      <CtaLink cta={cta} className={inverseButton}>
        <SiteIcon name="chat" className="h-4 w-4" />
        {cta.label}
      </CtaLink>
    </div>
  );
}
