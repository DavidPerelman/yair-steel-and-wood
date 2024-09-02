"use client";

import { CldUploadWidget } from "next-cloudinary";

const UploadImage = ({ setUrl }) => {
  const uploadSuccess = (results) => {
    setUrl(results.info.secure_url);
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
