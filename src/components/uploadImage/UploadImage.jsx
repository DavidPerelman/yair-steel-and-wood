"use client";

import { create } from "@/lib/action";
// import { uploadImage } from "@/lib/action";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handleSubmitFile = async (selectedFile) => {
  const arrayBuffer = await selectedFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["nextjs-server-actions-upload-sneakers"],
          upload_preset: "ngj2sv5f",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
  // if (!selectedFile) return;
  // console.log("selectedFile");
  // const arrayBuffer = await selectedFile.arrayBuffer();
  // const buffer = Buffer.from(arrayBuffer);
  // console.log(buffer);
};

// import { CldUploadWidget } from "next-cloudinary";

// export const uploadImage = async (base64EncodedImage) => {
//   try {
//     console.log("base64EncodedImage");
//     const uploadedResponse = await fetch("/api/upload", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ base64EncodedImage }),
//     });

//     console.log(uploadedResponse);
//   } catch (error) {
//     console.log(error);
//   }
// };

const UploadImage = ({ setUrl }) => {
  const [isClient, setIsClient] = useState(false);

  const [state, formAction] = useFormState(create, undefined);

  const [fileInput, setFileInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const uploadSuccess = (results) => {
  //   setUrl(results.info.secure_url);
  // };
  const handleFileInput = (e) => {
    const file = e.target.files[0];

    handleSubmitFile(file);

    // setSelectedFile(file);
  };

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result);
  //   };
  // };

  return (
    <>
      {isClient ? (
        <>
          {/* <form>
            <input
              type="file"
              name="image"
              onChange={handleFileInput}
              value={fileInput}
            />
            <button onClick={handleSubmitFile}>Submit</button>
          </form> */}

          <form>
            <input
              id="image"
              type="file"
              name="image"
              onChange={handleFileInput}
              value={fileInput}
            />
            <button onClick={handleSubmitFile}>Submit</button>
          </form>

          {/* <form
            action={formAction}
            className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
          >
            <p className="mb-6">
              <label
                htmlFor="image"
                className="block font-semibold text-sm mb-2"
              >
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
          </form> */}
          {/* {previewSource && (
            <Image alt="" src={previewSource} height={160} width={190} />
          )} */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default UploadImage;
