import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Gallery() {
  const { tentang } = site;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl">{tentang.galleryTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tentang.gallery.map((photo) => (
            <PhotoSlot key={photo.id} photo={photo} className="min-h-[180px] sm:min-h-[220px]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
