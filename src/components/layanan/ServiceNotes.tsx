import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { SiteIcon } from "@/components/ui/SiteIcon";

const closingButton =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#153C4B] transition-colors hover:bg-[#F4FAFD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto";

export function ServiceNotes() {
  const { layanan } = site;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl">{layanan.notesTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {layanan.notes.map((note) => (
            <article key={note.title} className="rounded-3xl border border-[#E3EEF4] bg-white p-6 shadow-[0_8px_30px_rgba(16,42,58,0.04)]">
              <h3 className="text-lg font-bold text-[#102A3A]">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C7380]">{note.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-[#0B82B4] px-6 py-8 text-white sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{layanan.closing.title}</h2>
            <p className="mt-2 text-white/85">{layanan.closing.subtitle}</p>
          </div>
          <CtaLink cta={layanan.closing.cta} className={closingButton}>
            <SiteIcon name="chat" className="h-4 w-4" />
            {layanan.closing.cta.label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
