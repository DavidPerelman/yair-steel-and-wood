"use client";

import { deleteImageAction } from "@/lib/action";
import Image from "next/image";
import { useState } from "react";

const UploadImageForm = ({
  projectImages,
  setProjectImages,
  handleImageUpload,
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadedImage(file);
  };

  const deleteImage = async (imageIndex, imageObj) => {
    const deleted = await deleteImageAction(imageObj.public_id);

    if (deleted.result === "ok") {
      const newContent = [...projectImages.filter((_, i) => i !== imageIndex)];
      setProjectImages(newContent);
    }
  };

  return (
    <div>
      <div>
        <p className="mb-6">
          <label htmlFor="image">בחר תמונות:</label>
          <br />
        </p>
        <input
          onChange={handleImageChange}
          id="image"
          type="file"
          name="image"
          accept="image/*"
          required
        />
        <button onClick={() => handleImageUpload(uploadedImage, "images")}>
          הוסף תמונה
        </button>
      </div>
      {projectImages.length !== 0 ? (
        <div key={""}>
          {projectImages.map((image, imageIndex) => (
            <div key={imageIndex}>
              <button onClick={() => deleteImage(imageIndex, image)}>
                מחק תמונה
              </button>
              <Image
                key={imageIndex}
                src={image.secure_url}
                height={100}
                width={100}
                alt=""
                unoptimized
              />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UploadImageForm;
