import React from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
function RocketItem({ rocket }) {
  return (
    <div className="">
      {/* <Image
        src={rocket.flickr_images[0]}
        alt={rocket.name}
        width={400}
        height={400}
      /> */}
      <ImageSlider images={rocket.flickr_images} />
    </div>
  );
}

export default RocketItem;
