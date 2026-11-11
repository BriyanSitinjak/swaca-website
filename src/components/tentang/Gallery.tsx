import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const { tentang } = site;

  return (
    <PageSection>
        <SectionHeading title={tentang.galleryTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tentang.gallery.map((photo) => (
            <PhotoSlot key={photo.id} photo={photo} className="min-h-[180px] sm:min-h-[220px]" />
          ))}
        </div>
    </PageSection>
  );
}
