import LayananScreen from "@/screens/layanan";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("layanan");

export default function LayananPage() {
  return <LayananScreen />;
}
