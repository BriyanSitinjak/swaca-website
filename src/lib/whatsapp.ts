import { site } from "@/content/site";

/** Digits-only WhatsApp number for wa.me, country code included. */
export function whatsappNumber(): string {
  return site.contact.whatsappNumber.replace(/\D/g, "");
}

/** https://wa.me/<number>?text=<encoded> */
export function buildWaLink(message?: string): string {
  const base = `https://wa.me/${whatsappNumber()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
