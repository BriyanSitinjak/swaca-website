import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      cta={site.ctas.floating}
      labelAsAria
      className="fixed right-4 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1EBE5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden />
    </WhatsAppLink>
  );
}
