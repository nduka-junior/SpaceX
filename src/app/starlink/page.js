"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
function page() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });

  return (
    <div id="map">
      <MapWithNoSSR />
    </div>
  );
}

export default page;
