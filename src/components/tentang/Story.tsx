import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Story() {
  const { tentang } = site;

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#0B82B4]">{tentang.eyebrow}</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl">{tentang.title}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5C7380]">{tentang.story}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#153C4B]">{tentang.belief}</p>
          </div>
          <PhotoSlot photo={tentang.portrait} className="min-h-[240px] sm:min-h-[320px]" />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#102A3A] sm:text-3xl">{tentang.segmentsTitle}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tentang.segments.map((segment) => (
              <li key={segment} className="max-w-full rounded-full bg-white px-3 py-1.5 text-sm text-[#153C4B] ring-1 ring-[#E3EEF4]">
                {segment}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
