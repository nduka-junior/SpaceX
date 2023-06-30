"use client";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { useState } from "react";
function ImageSlider({ images }) {
  const [imageNum, setImageNum] = useState(images);
  console.log(imageNum);
  return (
    <div className=" my-2 imgd">
      <SimpleImageSlider
        style={{ backgroundColor: "none" }}
        width={300}
        height={300}
        images={images}
        showNavs={true}
        showBullets={true}
        autoPlay={false}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={4}
      />
    </div>
  );
}

export default ImageSlider;
