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

interface MapPickerProps {
  lat?: number;
  lng?: number;
  onChange: (lat: number, lng: number) => void;
}

function MapClick({ onChange }: { onChange: MapPickerProps["onChange"] }) {
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function Recenter({ center }: { center: LatLngTuple }) {
  const map = useMap();
  useEffect(() => {
    // Only flyTo if the coordinates are actually valid numbers
    if (!isNaN(center[0]) && !isNaN(center[1])) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
}

export default function MapPicker({ lat, lng, onChange }: MapPickerProps) {
  const customIcon = L.divIcon({
    html: `<span class="material-symbols-outlined" 
            style="font-size:40px;color:#d32f2f;font-variation-settings:'FILL' 1;">
            location_on
           </span>`,
    className: "map-marker-icon",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const isValid =
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180;

  const center: LatLngTuple = isValid ? [lat, lng] : [7.8731, 80.7718];

  return (
    <div className="h-full w-full">
      <MapContainer
        center={center}
        zoom={isValid ? 12 : 7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClick onChange={onChange} />

        {isValid && customIcon && (
          <>
            <Marker position={center} icon={customIcon} />
            <Recenter center={center} />
          </>
        )}
      </MapContainer>
    </div>
  );
}
