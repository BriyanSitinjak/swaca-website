import type { IconType } from "react-icons";
import {
  LuCheck,
  LuClock,
  LuMapPin,
  LuMessageCircle,
  LuShirt,
  LuShoppingBag,
  LuTruck,
  LuZap,
} from "react-icons/lu";
import type { IconName } from "@/content/site";

const icons: Record<IconName, IconType> = {
  bag: LuShoppingBag,
  shirt: LuShirt,
  bolt: LuZap,
  truck: LuTruck,
  pin: LuMapPin,
  clock: LuClock,
  chat: LuMessageCircle,
  check: LuCheck,
};

export function SiteIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden />;
}
