import React, { useState, useRef } from "react";
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const icon = L.icon({ iconUrl: "/hostshare-map-icon.png" }); // https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found

export type LatLng = { lat: number; lng: number };
type MapProps = {
  center?: LatLng;
  markers?: LatLng[];
};
// some default initial centre...I chose Yakima!
const yakima = { lat: 46.5945172, lng: -120.5462013 };

const Map = ({ center = yakima, markers }: MapProps) => {
  // set center
  const [mapCenter, setMapCenter] = useState({ ...center });
  const ZOOM_LEVEL = 10;
  const mapRef = useRef(null);

  return (
    <>
      <div className="w-full h-[360px] md:h-[480px]">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={mapCenter}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={center} icon={icon}>
            <Popup>
              $123
            </Popup>
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
