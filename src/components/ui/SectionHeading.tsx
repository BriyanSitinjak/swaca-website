import { eyebrowText, proseText, sectionTitle } from "@/components/ui/styles";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, as = "h2", className = "max-w-2xl" }: SectionHeadingProps) {
  const Title = as;

  return (
    <div className={className}>
      {eyebrow ? <p className={eyebrowText}>{eyebrow}</p> : null}
      <Title className={`${eyebrow ? "mt-2 " : ""}${as === "h1" ? "text-balance " : ""}${sectionTitle}`}>{title}</Title>
      {description ? (
        <p className={`mt-4 max-w-2xl text-pretty ${proseText}`}>{description}</p>
      ) : null}
    </div>
  );
}
