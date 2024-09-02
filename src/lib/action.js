"use server";

// import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import bcrypt from "bcrypt";
import { signIn, signOut } from "next-auth/react";
import axios from "axios";
import { Project } from "./models/projectModel";

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
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

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
    revalidatePath("/projects");
    return newProject;
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

export const boxClickHandler = async (slug) => {
  // "use server";
  // console.log(`/projects/${slug}`);
};
