"use server";

// import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import bcrypt from "bcrypt";
import { signIn, signOut } from "next-auth/react";
import axios from "axios";
import { Project } from "./models/projectModel";
var Promise = require("es6-promise").Promise;

// const { cloudinary } = require("cloudinary");
import { v2 as cloudinary } from "cloudinary";
import { Post } from "./models/postModel";

// export const getUsers = async () => {
//   try {
//     connectToDb();

//     const users = await User.find();
//     return users;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getImages = async () => {
//   const res = await backendClient.myPublicImages.listFiles();
//   console.log(res.data);
// };

export const addProject = async (previousState, formData) => {
  const {
    title,
    description,
    thumbnail,
    images,
    price,
    size,
    division,
    material,
    slug,
  } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newProject = Project({
      title,
      description,
      thumbnail,
      images,
      price,
      size,
      division,
      material,
      slug,
    });

    await newProject.save();
    console.log("saved to db");
    // revalidatePath("/projects");
    return newProject;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const addPost = async (previousState, formData) => {
  const { title, description, images, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = Post({
      title,
      description,
      thumbnail,
      images,
      price,
      size,
      division,
      material,
      slug,
    });

    await newPost.save();
    console.log("saved to db");
    // revalidatePath("/projects");
    return newPost;
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// export const deletePost = async (formData) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     connectToDb();

//     await Post.findByIdAndDelete(id);
//     console.log("deleted from db");
//     revalidatePath("/blog");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something went wrong!" };
//   }
// };

// export const addUser = async (previousState, formData) => {
//   const { username, email, password, img } = Object.fromEntries(formData);

//   try {
//     connectToDb();
//     const newUser = User({ username, email, password, img });

//     await newUser.save();
//     console.log("saved to db");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something went wrong!" };
//   }
// };

// export const deleteUser = async (formData) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     connectToDb();

//     await Post.deleteMany({ userId: id });
//     await User.findByIdAndDelete(id);
//     console.log("deleted from db");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something went wrong!" };
//   }
// };

// export const handleGithubLogin = async () => {
//   "use server";
//   await signIn("github");
// };

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

// export async function createUpload(previousState, formData) {
//   "use server";

//   const { image } = Object.fromEntries(formData);

//   const arrayBuffer = await image.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);

//   const uploaded = await new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream(
//         {
//           // tags: ["nextjs-server-actions-upload-sneakers"],
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

//   // revalidatePath("/");
// }

export async function uploadToCloudinary(previousState, formData) {
  "use server";

  const { image } = Object.fromEntries(formData);

  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploaded = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          // tags: ["nextjs-server-actions-upload-sneakers"],
          upload_preset: process.env.UPLOAD_PRESET,
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

  return uploaded;

  // revalidatePath("/");
}

export async function deleteImageAction(id) {
  const deleted = await cloudinary.uploader.destroy(id, function (result) {
    console.log("result: ", result);
    return result;
  });

  return deleted;
}
