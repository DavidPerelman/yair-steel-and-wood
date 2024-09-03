"use client";

import { createUpload } from "@/lib/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const UploadImageForm = () => {
  const [state, formAction] = useFormState(createUpload, undefined);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    console.log(state !== undefined);

    if (state !== undefined) {
      setUploadedImages((uploadedImages) => [
        ...uploadedImages,
        state.secure_url,
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
      {uploadedImages.length > 0 && (
        <div>
          {uploadedImages.map((image) => (
            <Image key={image} src={image} height={100} width={100} alt="" />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadImageForm;
