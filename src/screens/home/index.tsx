import { ClosingCta, PricePreview } from "@/components/home/PricePreview";
import { Hero } from "@/components/home/Hero";
import { HowToOrder } from "@/components/home/HowToOrder";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomeScreen() {
  return (
    <main>
      <Hero />
      <ServiceHighlights />
      <HowToOrder />
      <WhyUs />
      <PricePreview />
      <ClosingCta />
    </main>
  );
}
