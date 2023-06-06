"use client";

import dynamic from "next/dynamic";
import { LatLng } from './Map';
// import OpenStreetMap from '.Map';
const OpenStreetMap = dynamic(() => import("./Map"), {
  ssr: false,
});

type MapWrapperProps = {
  center?: LatLng;
  initialZoom?: number;
  heightFull?: boolean;
};
const MapWrapper = (props: MapWrapperProps) => {
  return (
    <OpenStreetMap {...props} />
  );
};
export default MapWrapper;
