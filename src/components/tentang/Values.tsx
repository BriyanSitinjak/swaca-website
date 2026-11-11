import type { Value } from "@/content/site";
import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bodyText, cardTitle, surfaceCard } from "@/components/ui/styles";

function ValueCard({ value, className = "", bodyClass = "" }: { value: Value; className?: string; bodyClass?: string }) {
  return (
    <article className={[surfaceCard, className].filter(Boolean).join(" ")}>
      <p className="text-lg font-bold text-[#0B82B4]">{value.index}</p>
      <h3 className={`mt-2 ${cardTitle}`}>{value.title}</h3>
      <p className={["mt-2", bodyText, bodyClass].filter(Boolean).join(" ")}>{value.description}</p>
    </article>
  );
}

export function Values() {
  const { tentang } = site;
  const featured = tentang.values.slice(0, -1);
  const closing = tentang.values.at(-1);

  return (
    <PageSection tone="white">
        <SectionHeading title={tentang.valuesTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((value) => (
            <ValueCard key={value.index} value={value} />
          ))}
        </div>
        {closing ? <ValueCard value={closing} className="mt-4" bodyClass="max-w-xl" /> : null}
    </PageSection>
  );
}
