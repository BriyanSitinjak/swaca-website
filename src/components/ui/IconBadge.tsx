import type { IconName } from "@/content/site";
import { SiteIcon } from "@/components/ui/SiteIcon";

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F4FB] text-[#0B82B4]">
      <SiteIcon name={name} className="h-5 w-5" />
    </span>
  );
}
