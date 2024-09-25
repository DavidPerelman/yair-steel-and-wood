"use client";

import { deleteImageAction } from "@/lib/action";
import Image from "next/image";
import { useEffect, useState } from "react";

const UploadThumbnailForm = ({
  projectThumbnail,
  setProjectThumbnail,
  handleImageUpload,
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const deleteImage = async (public_id) => {
    const deleted = await deleteImageAction(public_id);

    if (deleted.result === "ok") {
      setProjectThumbnail(null);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadedImage(file);
  };

  return (
    <div>
      <div>
        <p>
          <label htmlFor="image">בחר תמונת תצוגה:</label>
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
        <button onClick={() => handleImageUpload(uploadedImage, "thumbnail")}>
          הוסף תמונה
        </button>
      </div>
      {projectThumbnail && projectThumbnail.secure_url ? (
        <div>
          <div>
            <button onClick={() => deleteImage(projectThumbnail.public_id)}>
              מחק תמונה
            </button>
            <Image
              src={projectThumbnail.secure_url}
              height={100}
              width={100}
              alt=""
              unoptimized
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UploadThumbnailForm;
