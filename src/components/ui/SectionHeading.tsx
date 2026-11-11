export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.16em] text-[#0B82B4]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#102A3A] sm:text-4xl">{title}</h2>
    </div>
  );
}
