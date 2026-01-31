"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const icon = L.divIcon({
  html: `<span class="material-symbols-outlined"
    style="font-size:40px;color:#d32f2f;font-variation-settings:'FILL' 1;">
    location_on
  </span>`,
  className: "map-marker-icon",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

interface MapPickerProps {
  lat?: number;
  lng?: number;
  onChange: (lat: number, lng: number) => void;
}

/* Click on map → update parent */
function MapClick({ onChange }: { onChange: MapPickerProps["onChange"] }) {
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

/* Recenter map when coordinates change */
function Recenter({ center }: { center: LatLngTuple }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 12);
  }, [center, map]);

  return null;
}

export default function MapPicker({ lat, lng, onChange }: MapPickerProps) {
  const isValid =
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat! >= -90 &&
    lat! <= 90 &&
    lng! >= -180 &&
    lng! <= 180;

  const center: LatLngTuple = isValid ? [lat!, lng!] : [7.8731, 80.7718];

  return (
    <MapContainer
      center={center}
      zoom={isValid ? 12 : 7}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MapClick onChange={onChange} />

      {isValid && (
        <>
          <Marker position={center} icon={icon} />
          <Recenter center={center} />
        </>
      )}
    </MapContainer>
  );
}
