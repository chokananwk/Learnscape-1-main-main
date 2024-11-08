import React from "react";
import dynamic from "next/dynamic";


const Map = dynamic(() => import("../components/Maps/page"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <>
        <Map />
    </>
  );
}
