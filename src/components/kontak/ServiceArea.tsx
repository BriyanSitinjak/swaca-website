import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { accentIcon, bodyText, chip } from "@/components/ui/styles";

export function ServiceArea() {
  const { kontak } = site;

  return (
    <PageSection tone="white">
        <SectionHeading title={kontak.areaTitle} />
        <p className={`mt-3 max-w-2xl text-pretty ${bodyText}`}>
          {site.pickupFeeNote}. {site.outsideAreaNote}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.areas.map((area) => (
            <li key={area} className={`inline-flex max-w-full items-center gap-2 border border-[#E3EEF4] bg-white ${chip}`}>
              <SiteIcon name="check" className={accentIcon} />
              {area}
            </li>
          ))}
        </ul>
    </PageSection>
  );
}
