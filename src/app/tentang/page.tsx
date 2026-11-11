import TentangScreen from "@/screens/tentang";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("tentang");

export default function TentangPage() {
  return <TentangScreen />;
}
