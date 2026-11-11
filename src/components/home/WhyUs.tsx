import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { bodyText } from "@/components/ui/styles";

export function WhyUs() {
  const { whyUs } = site.home;

  return (
    <PageSection tone="white">
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} />
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.items.map((item) => (
            <li key={item.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7F4FB] text-[#0B82B4]">
                <SiteIcon name={item.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-3 font-bold text-[#102A3A]">{item.title}</h3>
              <p className={`mt-1 ${bodyText}`}>{item.description}</p>
            </li>
          ))}
        </ul>
    </PageSection>
  );
}
