import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bodyText, cardShadow, cardTitle } from "@/components/ui/styles";

export function HowToOrder() {
  const { steps } = site.home;

  return (
    <PageSection tone="soft">
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.items.map((step) => (
            <li key={step.index} className={`rounded-3xl bg-white p-6 ${cardShadow}`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B82B4] text-sm font-bold text-white">
                {step.index}
              </span>
              <h3 className={`mt-4 ${cardTitle}`}>{step.title}</h3>
              <p className={`mt-2 ${bodyText}`}>{step.description}</p>
            </li>
          ))}
        </ol>
    </PageSection>
  );
}
