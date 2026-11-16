import { site } from "@/content/site";
import { PageSection } from "@/components/layout/PageSection";
import { PickupPolicy } from "@/components/ui/PickupPolicy";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { surfaceCard } from "@/components/ui/styles";

export function ServiceArea() {
  const { kontak } = site;

  return (
    <PageSection tone="white">
      <SectionHeading title={kontak.areaTitle} />
      <div className={`mt-8 max-w-3xl ${surfaceCard}`}>
        <PickupPolicy />
      </div>
    </PageSection>
  );
}
