import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { surfaceCard } from "@/components/ui/styles";

export function Values() {
  const { tentang } = site;
  const featured = tentang.values.slice(0, -1);
  const closing = tentang.values.at(-1);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={tentang.valuesTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((value) => (
            <article key={value.index} className={surfaceCard}>
              <p className="text-lg font-bold text-[#0B82B4]">{value.index}</p>
              <h3 className="mt-2 text-lg font-bold text-[#102A3A]">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C7380]">{value.description}</p>
            </article>
          ))}
        </div>
        {closing ? (
          <article className={`mt-4 ${surfaceCard}`}>
            <p className="text-lg font-bold text-[#0B82B4]">{closing.index}</p>
            <h3 className="mt-2 text-lg font-bold text-[#102A3A]">{closing.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5C7380]">{closing.description}</p>
          </article>
        ) : null}
      </Container>
    </section>
  );
}
