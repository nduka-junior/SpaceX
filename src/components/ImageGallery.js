// import React from "react";
// import Image from "next/image";
// function ImageGallery({ images }) {
//   return (
//     <div className="grid  grid-cols-1 justify-center items-center gap-4  ">
//       {images.map((image) => {
//         return (
//           <div className="w-100">
//             <Image src={image} width={400} height={900} alt={image} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ImageGallery;

import React from "react";
import Image from "next/image";
function ImageGallery({ images }) {
  return (
    <div className="grid  grid-cols-2 justify-center  gap-4 lg:grid-cols-2 md:grid-cols-1   max-h-[85vh] overflow-y-scroll ">
      {images.map((image,id) => {
        return (
          <div className=" grid" key={id}>
            <Image
              src={image}
              style={{ width: "100%!important", height: "100%" }}
              width={400}
              height={400}
              alt={image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImageGallery;
