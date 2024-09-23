"use server";

import axios from "axios";
import nodemailer from "nodemailer";
import { v2 as cloudinary } from "cloudinary";

var Promise = require("es6-promise").Promise;

export const callApiGet = async (url) => {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const callApiPost = async (url, formData) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    if (data) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const callApiPtach = async (url, formData) => {
  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    if (data) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export const register = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/register", {});
  } catch (error) {
    console.log(error);
  }
};

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function uploadToCloudinary(previousState, formData) {
//   "use server";

//   const { image } = Object.fromEntries(formData);

//   const arrayBuffer = await image.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);

//   const uploaded = await new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream(
//         {
//           upload_preset: process.env.UPLOAD_PRESET,
//         },
//         function (error, result) {
//           if (error) {
//             reject(error);
//             return;
//           }
//           resolve(result);
//         }
//       )
//       .end(buffer);
//   });

//   return uploaded;
// }

export async function uploadToCloudinary(previousState, formData) {
  "use server";

  const { image } = Object.fromEntries(formData);

  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", process.env.UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const uploaded = await response.json();

  if (!response.ok) {
    throw new Error(`Cloudinary upload failed: ${uploaded.error.message}`);
  }

  return uploaded;
}

export async function deleteImageAction(id) {
  const deleted = await cloudinary.uploader.destroy(id, function (result) {
    return result;
  });

  return deleted;
}

export const handleSubmit = async (previousState, formData) => {
  const { fullname, email, subject, message } = Object.fromEntries(formData);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SITE_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.SITE_EMAIL,
      to: process.env.SITE_EMAIL,
    };

    const mail = await transporter.sendMail({
      ...mailOption,
      subject: "קיבלת מייל מהאתר!",
      html: `
        <div style="direction: rtl;">
            <p>שם: ${fullname} </p>
            <p>אימייל: ${email} </p>
            <p>נושא: ${subject} </p>
            <p>הודעה: ${message} </p>
        </div>
            `,
    });

    return { sucsses: true };
  } catch (error) {
    console.log(error);
  }
};
