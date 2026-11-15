import type { PhotoSlot as PhotoSlotContent } from "@/content/site";
import { mediaFrame } from "@/components/ui/styles";

export function PhotoSlot({
  photo,
  className = "",
  priority = false,
}: {
  photo: PhotoSlotContent;
  className?: string;
  priority?: boolean;
}) {
  if (!photo.src) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden rounded-[1.75rem] border-2 border-dashed border-[#B7D4E6] bg-[#E7F4FB] px-6 text-center text-sm text-[#0B82B4] ${className}`}
      >
        <p>{photo.caption}</p>
      </div>
    );
  }

  return (
    <div className={`${mediaFrame} ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
