"use client";

import Loading from "@/app/loading";
import { deleteImageAction, uploadToCloudinary } from "@/lib/action";
import Image from "next/image";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const UploadThumbnailForm = ({ formData, setFormData }) => {
  const [state, formAction] = useFormState(uploadToCloudinary, undefined);

  const deleteImage = async (public_id) => {
    const deleted = await deleteImageAction(public_id);

    if (deleted.result === "ok") {
      setFormData((prevState) => ({
        ...prevState,
        thumbnail: "",
      }));
    }
  };

  useEffect(() => {
    if (state !== undefined) {
      console.log(state);

      const newImageObject = {
        public_id: state.public_id,
        secure_url: state.secure_url,
      };

      setFormData((prevState) => ({
        ...prevState,
        thumbnail: newImageObject,
      }));
    }
  }, [state, setFormData]);

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
      {formData.thumbnail && formData.thumbnail.secure_url ? (
        <div>
          <div>
            <button onClick={() => deleteImage(formData.thumbnail.public_id)}>
              מחק תמונה
            </button>
            <Image
              src={formData.thumbnail.secure_url}
              height={100}
              width={100}
              alt=""
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
