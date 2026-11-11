import KontakScreen from "@/screens/kontak";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("kontak");

export default function KontakPage() {
  return <KontakScreen />;
}
