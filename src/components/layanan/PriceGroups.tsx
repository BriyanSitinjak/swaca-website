import type { ServiceGroup } from "@/content/site";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { SiteIcon } from "@/components/ui/SiteIcon";

const orderButton =
  "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B82B4] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#086F9A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function PriceCard({ group }: { group: ServiceGroup }) {
  const featured = Boolean(group.badge);

  return (
    <article
      className={`flex flex-col rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(16,42,58,0.04)] ${featured ? "border-2 border-[#0B82B4]" : "border border-[#E3EEF4]"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F4FB] text-[#0B82B4]">
          <SiteIcon name={group.icon} className="h-5 w-5" />
        </span>
        {group.badge ? (
          <span className="rounded-full bg-[#E7F4FB] px-2.5 py-1 text-xs font-semibold text-[#0B82B4]">{group.badge}</span>
        ) : null}
      </div>
      <h2 className="mt-4 text-xl font-bold text-[#102A3A]">{group.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#5C7380]">{group.description}</p>
      <ul className="mt-5 divide-y divide-[#E6EEF3] border-t border-[#E6EEF3]">
        {group.lines.map((line) => (
          <li key={line.id} className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-[#102A3A]">{line.name}</span>
            <span className="shrink-0 text-sm font-bold text-[#102A3A]">{line.priceLabel}</span>
          </li>
        ))}
      </ul>
      <CtaLink cta={group.cta} className={orderButton}>
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
        <p className="text-xs font-semibold tracking-[0.16em] text-[#0B82B4]">{layanan.eyebrow}</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl">{layanan.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C7380]">{layanan.intro}</p>
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
          {layanan.groups.map((group) => (
            <PriceCard key={group.id} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
