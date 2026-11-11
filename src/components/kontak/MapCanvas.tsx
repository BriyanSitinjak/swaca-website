"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { divIcon } from "leaflet";
import { site } from "@/content/site";
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

export default function MapCanvas() {
  const { latitude, longitude, zoom } = site.map;
  const label = site.kontak.mapCaption;
  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      className="swaca-map"
      dragging={false}
      scrollWheelZoom={false}
      touchZoom={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
      fadeAnimation={false}
      zoomAnimation={false}
      aria-label={label}
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
