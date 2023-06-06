"use client";

import dynamic from "next/dynamic";
// import OpenStreetMap from '.Map';
const OpenStreetMap = dynamic(() => import("./Map"), {
  ssr: false,
});

type MapWrapperProps = {
  center?: { lat: number; lng: number };
};
const MapWrapper = ({ center }: MapWrapperProps) => {
  return (
    <section className="w-full my-6 md:my-12">
      <h2 className="text-xl font-semibold mb-6">{"Where you'll be"}</h2>
      <OpenStreetMap center={center} />
    </section>
  );
};
export default MapWrapper;
