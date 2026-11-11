import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { chip, proseText } from "@/components/ui/styles";

export function Story() {
  const { tentang } = site;

  return (
    <PageSection pad="page">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading as="h1" className="max-w-xl" eyebrow={tentang.eyebrow} title={tentang.title} />
            <p className={`mt-4 max-w-xl ${proseText}`}>{tentang.story}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#153C4B]">{tentang.belief}</p>
          </div>
          <PhotoSlot photo={tentang.portrait} className="min-h-[240px] sm:min-h-[320px]" />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#102A3A] sm:text-3xl">{tentang.segmentsTitle}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tentang.segments.map((segment) => (
              <li key={segment} className={`max-w-full bg-white ring-1 ring-[#E3EEF4] ${chip}`}>
                {segment}
              </li>
            ))}
          </ul>
        </div>
    </PageSection>
  );
}
