import type { PhotoSlot as PhotoSlotContent } from "@/content/site";

export function PhotoSlot({ photo, className = "" }: { photo: PhotoSlotContent; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-[1.75rem] border-2 border-dashed border-[#B7D4E6] bg-[#E7F4FB] px-6 text-center text-sm text-[#0B82B4] ${className}`}
    >
      {photo.src ? <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" /> : <p>{photo.caption}</p>}
    </div>
  );
}
