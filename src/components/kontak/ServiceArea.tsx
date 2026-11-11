import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";

export function ServiceArea() {
  const { kontak } = site;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={kontak.areaTitle} />
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-[#5C7380]">
          {site.pickupFeeNote}. {site.outsideAreaNote}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.areas.map((area) => (
            <li
              key={area}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#E3EEF4] bg-white px-3 py-1.5 text-sm text-[#153C4B]"
            >
              <SiteIcon name="check" className="h-4 w-4 shrink-0 text-[#0B82B4]" />
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
