import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

const card = "rounded-3xl border border-[#E3EEF4] bg-white p-6 shadow-[0_8px_30px_rgba(16,42,58,0.04)]";

export function Values() {
  const { tentang } = site;
  const featured = tentang.values.slice(0, -1);
  const closing = tentang.values.at(-1);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl">{tentang.valuesTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((value) => (
            <article key={value.index} className={card}>
              <p className="text-lg font-bold text-[#0B82B4]">{value.index}</p>
              <h3 className="mt-2 text-lg font-bold text-[#102A3A]">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C7380]">{value.description}</p>
            </article>
          ))}
        </div>
        {closing ? (
          <article className={`mt-4 ${card}`}>
            <p className="text-lg font-bold text-[#0B82B4]">{closing.index}</p>
            <h3 className="mt-2 text-lg font-bold text-[#102A3A]">{closing.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5C7380]">{closing.description}</p>
          </article>
        ) : null}
      </Container>
    </section>
  );
}
