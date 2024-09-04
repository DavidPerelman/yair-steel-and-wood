"use client";

import { deleteImageAction, uploadToCloudinary } from "@/lib/action";
import Image from "next/image";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const UploadImageForm = ({ formData, setFormData }) => {
  const [state, formAction] = useFormState(uploadToCloudinary, undefined);

  const deleteImage = async (imageIndex, imageObj) => {
    const deleted = await deleteImageAction(imageObj.public_id);

    if (deleted.result === "ok") {
      setFormData((prevState) => ({
        ...prevState,
        images: prevState.images.filter((_, index) => index !== imageIndex),
      }));
    }
  };

  useEffect(() => {
    if (state !== undefined) {
      const newImageObject = {
        public_id: state.public_id,
        secure_url: state.secure_url,
      };

      setFormData((prevState) => ({
        ...prevState,
        images: [...prevState.images, newImageObject],
      }));
    }
  }, [state]);

  return (
    <div>
      <form
        action={formAction}
        className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
      >
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            בחר תמונות:
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
      {formData.images.length !== 0 ? (
        <div key={""}>
          {formData.images.map((image, imageIndex) => (
            <div key={imageIndex}>
              {console.log(image.secure_url)}
              <button onClick={() => deleteImage(imageIndex, image)}>
                מחק תמונה
              </button>
              <Image
                key={imageIndex}
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
