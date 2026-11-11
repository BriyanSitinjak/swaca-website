import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";

export function WhyUs() {
  const { whyUs } = site.home;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} />
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.items.map((item) => (
            <li key={item.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7F4FB] text-[#0B82B4]">
                <SiteIcon name={item.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-3 font-bold text-[#102A3A]">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#5C7380]">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
