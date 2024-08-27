// import { backendClient } from "@/app/api/edgestore/[...edgestore]/route";
import { getImages } from "@/lib/action";
import Image from "next/image";
import React from "react";

const Images = async () => {
  const images = getImages();
  //   const images = await backendClient.myPublicImages.listFiles();

  //   console.log(images.data);

  return (
    <div>
      {/* {images.map((image) => (
              <Image key={image.} src="/instagram-logo.png" width={50} height={50} alt="logo" />
      ))} */}
    </div>
  );
};

export default Images;
