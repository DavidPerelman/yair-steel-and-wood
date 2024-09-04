"use client";

import { deleteImageAction, uploadToCloudinary } from "@/lib/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const UploadThumbnailForm = (formData, setFormData) => {
  const [state, formAction] = useFormState(uploadToCloudinary, undefined);
  const [uploadedImages, setUploadedImages] = useState([]);

  const deleteImage = async (id) => {
    const deleted = await deleteImageAction(id);

    if (deleted.result === "ok") {
      const newUploadedImages = uploadedImages.filter(
        (image) => image.public_id !== id
      );

      setUploadedImages(newUploadedImages);
    }
  };

  useEffect(() => {
    if (state !== undefined) {
      setUploadedImages((uploadedImages) => [
        ...uploadedImages,
        { secure_url: state.secure_url, public_id: state.public_id },
      ]);
      console.log(uploadedImages);
    }
    console.log(uploadedImages);
  }, [state]);

  return (
    <div>
      <form
        action={formAction}
        className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
      >
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            בחר תמונת תצוגה:
          </label>
          <br />
        </p>
        <input
          id="image"
          className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="file"
          name="image"
          required
        />
        <button>הוסף תמונה</button>
      </form>
      {uploadedImages.length ? (
        <div key={""}>
          {uploadedImages.map((image, i) => (
            <div key={i}>
              <button onClick={() => deleteImage(image.public_id)}>
                מחק תמונה
              </button>
              <Image
                key={i}
                src={image.secure_url}
                height={100}
                width={100}
                alt=""
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

export default UploadThumbnailForm;
