"use client";

import { createUpload, deleteImageAction } from "@/lib/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const UploadImageForm = () => {
  const [state, formAction] = useFormState(createUpload, undefined);
  const [uploadedImages, setUploadedImages] = useState([]);

  const deleteImage = async (id) => {
    const deleted = await deleteImageAction(id);
    console.log(deleted);

    if (deleted.result === "ok") {
      const newUploadedImages = uploadedImages.filter(
        (image) => image.public_id !== id
      );

      setUploadedImages(newUploadedImages);
    }
  };

  useEffect(() => {
    // deleteImage("sahbwzjbkj43hzpr2uhv");
    console.log(state !== undefined);

    if (state !== undefined) {
      setUploadedImages((uploadedImages) => [
        ...uploadedImages,
        { secure_url: state.secure_url, public_id: state.public_id },
      ]);
      console.log(uploadedImages);

      // setUploadedImages(state.secure_url);
    }
    // setUploadedImages(state.secure_url);
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
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
            required
          />
        </p>
        <button>Submit</button>
      </form>
      {uploadedImages.length ? (
        <div key={""}>
          {uploadedImages.map((image, i) => (
            <div>
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

export default UploadImageForm;
