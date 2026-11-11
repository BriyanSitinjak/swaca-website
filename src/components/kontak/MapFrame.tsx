"use client";

import dynamic from "next/dynamic";
import { site } from "@/content/site";

const MapCanvas = dynamic(() => import("./MapCanvas"), {
  ssr: false,
  loading: () => <div className="h-full min-h-[320px] bg-[#E7F4FB]" aria-hidden />,
});

export function MapFrame() {
  const { mapCaption } = site.kontak;

  return (
    <div className="relative z-0 h-full min-h-[320px] overflow-hidden rounded-[1.75rem] border border-[#D5E3EC] bg-[#E7F4FB]">
      <div className="absolute inset-0">
        <MapCanvas
          latitude={site.map.latitude}
          longitude={site.map.longitude}
          zoom={site.map.zoom}
          label={mapCaption}
        />
      </div>
    </div>
  );
}
