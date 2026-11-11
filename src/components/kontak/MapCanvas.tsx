"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

const pin = divIcon({
  className: "swaca-pin",
  html: "<span></span>",
  iconSize: [28, 28],
  iconAnchor: [14, 26],
});

function RefreshSize() {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [map]);

  return null;
}

type MapCanvasProps = {
  latitude: number;
  longitude: number;
  zoom: number;
  label: string;
};

export default function MapCanvas({ latitude, longitude, zoom, label }: MapCanvasProps) {
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      dragging={!coarse}
      touchZoom={!coarse}
      aria-label={label}
      style={{ height: "100%", width: "100%" }}
    >
      <RefreshSize />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={pin}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
}
