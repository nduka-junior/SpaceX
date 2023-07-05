"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
function Page(){
  const [mounted, setMounted] = useState(false);
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  return <div id="map">{mounted && <MapWithNoSSR />}</div>;
}

export default Page;
