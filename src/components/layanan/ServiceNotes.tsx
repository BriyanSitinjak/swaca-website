import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { surfaceCard } from "@/components/ui/styles";

export function ServiceNotes() {
  const { layanan } = site;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={layanan.notesTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {layanan.notes.map((note) => (
            <article key={note.title} className={surfaceCard}>
              <h3 className="text-lg font-bold text-[#102A3A]">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C7380]">{note.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 sm:mt-14">
          <ClosingBanner title={layanan.closing.title} subtitle={layanan.closing.subtitle} cta={layanan.closing.cta} />
        </div>
      </Container>
    </section>
  );
}
