import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const { tentang } = site;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title={tentang.galleryTitle} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tentang.gallery.map((photo) => (
            <PhotoSlot key={photo.id} photo={photo} className="min-h-[180px] sm:min-h-[220px]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
