import type { ServiceHighlight } from "@/content/site";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";

const textLink =
  "text-sm font-semibold text-[#0B82B4] transition-colors hover:text-[#086F9A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4]";

function ServiceCard({ item, wide = false }: { item: ServiceHighlight; wide?: boolean }) {
  return (
    <article
      className={`flex h-full rounded-3xl border border-[#E3EEF4] bg-white p-6 shadow-[0_8px_30px_rgba(16,42,58,0.04)] ${wide ? "flex-col gap-4 sm:flex-row sm:items-center" : "flex-col"}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F4FB] text-[#0B82B4]">
        <SiteIcon name={item.icon} className="h-5 w-5" />
      </span>
      <div className={wide ? "min-w-0 sm:flex-1" : "contents"}>
        <h3 className={`text-lg font-bold text-[#102A3A] ${wide ? "" : "mt-4"}`}>{item.title}</h3>
        <p className={`text-sm leading-relaxed text-[#5C7380] ${wide ? "mt-1 max-w-xl" : "mt-2 flex-1"}`}>{item.description}</p>
      </div>
      <CtaLink cta={item.cta} className={`inline-flex w-fit shrink-0 ${textLink} ${wide ? "" : "mt-4"}`}>
        {item.cta.label}
      </CtaLink>
    </article>
  );
}

export function ServiceHighlights() {
  const { services } = site.home;
  const featured = services.items.filter((item) => item.id !== "antar-jemput");
  const pickup = services.items.find((item) => item.id === "antar-jemput");

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={services.eyebrow} title={services.title} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
        {pickup ? (
          <div className="mt-4">
            <ServiceCard item={pickup} wide />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
