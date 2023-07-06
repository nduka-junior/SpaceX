import getStarlink from "@/lib/getStarlink/getStarlink";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import data from "@/lib/dd.json";
import React from "react";
import formatDate from "@/lib/date";
import Link from "next/link";
import L from "leaflet";
async function Map() {
  const starlinks = await getStarlink();
  const myIcon = new L.Icon({
      iconUrl: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202178/satellite-icon-md.png",
      iconRetinaUrl:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3202178/satellite-icon-md.png",
    popupAnchor: [-0, -0],
    iconSize: [32, 32],
  });
  // const starlinks = data;
  const filterStarlinks = starlinks.filter((starlink) => {
    return starlink.longitude !== null && starlink.latitude !== null;
  }).slice(0, 100);
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
    const getRandCenter = filterStarlinks[Math.floor(Math.random() * filterStarlinks.length)];
    const randCenter = [getRandCenter.latitude, getRandCenter.longitude]
  return (
    <MapContainer
      preferCanvas={true}
      center={randCenter}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "85vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />

      <LocationMarker />

      {filterStarlinks.map((starlink, index) => {
        return (
          <div key={index}>
            <Marker
              position={[starlink.latitude, starlink.longitude]}
              animate={true}
              icon={myIcon}
            >
              <Popup>
                <div>
                  <h6 className="text-[14px]">
                    Name: {starlink.spaceTrack?.OBJECT_NAME}
                  </h6>
                  <h6 className="text-[12px]">
                    <span className="text-[16px] mr-1"> 🚀</span>
                    {formatDate(starlink.spaceTrack?.LAUNCH_DATE)}
                  </h6>
                  {starlink.version && (
                    <h6 className="text-[14px]">Version: {starlink.version}</h6>
                  )}
                  {starlink.height_km && (
                    <h6 className="text-[14px]">
                      Height: {Math.trunc(starlink.height_km)}km
                    </h6>
                  )}

                  {starlink.launch && (
                    <h6 className="text-[14px]">
                      Launch:
                      <Link
                        className=" text-blue"
                        href={`./launches/${starlink.launch}`}
                      >
                        Rocket Used
                      </Link>
                    </h6>
                  )}
                </div>
              </Popup>
            </Marker>
          </div>
        );
      })}
    </MapContainer>
  );
}

export default Map;
