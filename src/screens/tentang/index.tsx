import { Gallery } from "@/components/tentang/Gallery";
import { Story } from "@/components/tentang/Story";
import { Values } from "@/components/tentang/Values";

export default function TentangScreen() {
  return (
    <main>
      <Story />
      <Values />
      <Gallery />
    </main>
  );
}
