"use client";

import { CldUploadWidget } from "next-cloudinary";

const UploadImage = () => {
  const uploadSuccess = (results) => {
    console.log(results.info.secure_url);
  };

  return (
    <div>
      <CldUploadWidget uploadPreset="ngj2sv5f" onSuccess={uploadSuccess}>
        {({ open }) => {
          return <button onClick={() => open()}>Upload an File</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImage;
