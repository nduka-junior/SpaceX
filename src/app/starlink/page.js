"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "./loading";

function Page() {
  const [mounted, setMounted] = useState(false);
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
    loading: () => <Loading />,
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id="map"> {mounted && <MapWithNoSSR />}
    </div>
  );
}

export default Page;
