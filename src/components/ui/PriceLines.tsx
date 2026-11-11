import type { PriceLine } from "@/content/site";

export function PriceLines({ lines, compact = false }: { lines: PriceLine[]; compact?: boolean }) {
  return (
    <ul className={compact ? "divide-y divide-[#E6EEF3] border-t border-[#E6EEF3]" : "divide-y divide-[#E6EEF3]"}>
      {lines.map((line) => (
        <li
          key={line.id}
          className={`flex items-center justify-between gap-4 ${compact ? "py-3" : "py-4 first:pt-0 last:pb-0"}`}
        >
          <span className={compact ? "text-sm text-[#102A3A]" : "text-[#102A3A]"}>{line.name}</span>
          <span className={`shrink-0 font-bold text-[#102A3A] ${compact ? "text-sm" : ""}`}>{line.priceLabel}</span>
        </li>
      ))}
    </ul>
  );
}
