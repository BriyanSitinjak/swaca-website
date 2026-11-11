import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { ClosingBanner } from "@/components/ui/ClosingBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bodyText, cardTitle, surfaceCard } from "@/components/ui/styles";

export function ServiceNotes() {
  const { layanan } = site;

  return (
    <PageSection tone="white">
        <SectionHeading title={layanan.notesTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {layanan.notes.map((note) => (
            <article key={note.title} className={surfaceCard}>
              <h3 className={cardTitle}>{note.title}</h3>
              <p className={`mt-2 ${bodyText}`}>{note.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 sm:mt-14">
          <ClosingBanner title={layanan.closing.title} subtitle={layanan.closing.subtitle} cta={layanan.closing.cta} />
        </div>
    </PageSection>
  );
}
