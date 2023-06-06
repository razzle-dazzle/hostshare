import React, { useState, useRef } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import clsx from "clsx";
const icon = L.icon({ iconUrl: "/hostshare-map-icon.png" }); // https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found

export type LatLng = { lat: number; lng: number };
type MapProps = {
  center?: LatLng;
  initialZoom?: number;
  markers?: LatLng[];
  heightFull?: boolean;
};
// some default initial centre...I chose Yakima!
const yakima = { lat: 46.5945172, lng: -120.5462013 };
const ZOOM_LEVEL_DEFAULT = 10 as const;

const Map = ({
  initialZoom = ZOOM_LEVEL_DEFAULT,
  center = yakima,
  markers,
  heightFull = false,
}: MapProps) => {
  // set center
  const [mapCenter, setMapCenter] = useState({ ...center });

  const mapRef = useRef(null);
  const heightStyles = heightFull ? "h-[75vh]" : "h-[360px] md:h-[480px]";
  return (
    <>
      <div className={clsx("w-full", heightStyles)}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={mapCenter}
          zoom={initialZoom}
          ref={mapRef}
          placeholder={<PlaceholderComponent />}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={center} icon={icon}>
            <Popup>$123</Popup>
          </Marker>
          {/* {location.loaded && !location.error && (
                  <Marker
                    position={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                  ></Marker>
                )} */}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

const PlaceholderComponent = () => {
  return (
    <div className="flex min-w-[280px] min-h-[280px] justify-center items-center bg-slate-200 text-slate-400 font-semibold">
      Loading Map...
    </div>
  );
};
