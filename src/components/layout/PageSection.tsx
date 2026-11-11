import type { ReactNode } from "react";
import { Container } from "./Container";

const tones = {
  plain: "",
  white: "bg-white",
  soft: "bg-[#EAF4FB]",
} as const;

const pads = {
  page: "py-10 sm:py-16",
  band: "py-16 sm:py-20",
  tight: "py-10 sm:py-14",
  top: "pt-16 sm:pt-20",
} as const;

export function PageSection({
  children,
  tone = "plain",
  pad = "band",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  pad?: keyof typeof pads;
  className?: string;
}) {
  const sectionClass = [tones[tone], pads[pad], className].filter(Boolean).join(" ");

  return (
    <section className={sectionClass}>
      <Container>{children}</Container>
    </section>
  );
}
