// import { connectToDb } from "@/lib/connectToDb";
// import { User } from "@/lib/models/userModel";
// import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
// import { vs as cloudinary } from "cloudinary";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function POST(request) {
//   // await connectToDb();

//   try {
//     const data = await request.json();
//     console.log(request.body);

//     return NextResponse.json({ message: "User created successfully!" });
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function GET(request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(request) {
  const data = await request.json();

  // const uploadResponse = await cloudinary.uploader.upload(base64EncodedImage, {
  //   upload_preset: "ngj2sv5f",
  // });

  console.log(typeof data.base64EncodedImage);

  const uploadResponse = await cloudinary.uploader.upload(data.cloudinary, {
    upload_preset: "ngj2sv5f",
  });

  console.log(uploadResponse);

  return NextResponse.json({ message: "Hello World" });
}
