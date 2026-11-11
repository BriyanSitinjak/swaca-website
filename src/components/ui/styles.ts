const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B82B4]";

const focusWhite =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors";

const primaryFill = "bg-[#0B82B4] text-white shadow-sm hover:bg-[#086F9A]";

export const cardShadow = "shadow-[0_8px_30px_rgba(16,42,58,0.04)]";

export const surface = `rounded-3xl border border-[#E3EEF4] bg-white ${cardShadow}`;

export const surfaceCard = `${surface} p-6`;

export const primaryButton = `${buttonBase} w-full ${primaryFill} ${focusRing} sm:w-auto`;

export const primaryButtonBlock = `${buttonBase} w-full ${primaryFill} ${focusWhite}`;

export const secondaryButton = `${buttonBase} w-full border border-[#D5E3EC] bg-white text-[#153C4B] hover:bg-[#F4FAFD] ${focusRing} sm:w-auto`;

export const inverseButton = `${buttonBase} w-full bg-white text-[#153C4B] hover:bg-[#F4FAFD] ${focusWhite} sm:w-auto`;

export const textLink = `font-semibold text-[#0B82B4] underline decoration-[#0B82B4]/30 underline-offset-4 transition-colors hover:text-[#086F9A] ${focusRing}`;

export const quietLink = `text-sm font-semibold text-[#0B82B4] transition-colors hover:text-[#086F9A] ${focusRing}`;

export const sectionTitle = "text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl";

export const eyebrowText = "text-xs font-semibold tracking-[0.16em] text-[#0B82B4]";
