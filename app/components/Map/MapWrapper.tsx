"use client";

import dynamic from "next/dynamic";
import { LatLng } from './Map';
// import OpenStreetMap from '.Map';
const OpenStreetMap = dynamic(() => import("./Map"), {
  ssr: false,
});

type MapWrapperProps = {
  center?: LatLng;
};
const MapWrapper = ({ center }: MapWrapperProps) => {
  return (
    <OpenStreetMap center={center} />
  );
};
export default MapWrapper;
