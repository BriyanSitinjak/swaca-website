"use client";

import dynamic from "next/dynamic";
import { mediaFrame } from "@/components/ui/styles";

const MapCanvas = dynamic(() => import("./MapCanvas"), { ssr: false });

export function MapFrame() {
  return (
    <div className={`z-0 h-full min-h-[320px] ${mediaFrame}`}>
      <div className="absolute inset-0">
        <MapCanvas />
      </div>
    </div>
  );
}
