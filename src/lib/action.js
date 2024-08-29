"use server";

// import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./connectToDb";
import bcrypt from "bcrypt";
import { signOut } from "next-auth/react";

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

// export const addPost = async (previousState, formData) => {
//   //   const title = formData.get("title");
//   //   const desc = formData.get("desc");
//   //   const slug = formData.get("slug");

//   const { title, desc, slug, userId } = Object.fromEntries(formData);

//   try {
//     connectToDb();
//     const newPost = Post({ title, desc, slug, userId });

//     await newPost.save();
//     console.log("saved to db");
//     revalidatePath("/blog");
//     revalidatePath("/admin");
//   } catch (error) {
//     console.log(error);
//     return { error: "Something went wrong!" };
//   }
// };

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

export const handleLogout = async () => {
  "use server";
  console.log("handleLogout");

  signOut();
};

export const register = async (previousState, formData) => {
  // const { email, password, passwordRepeat } = Object.fromEntries(formData);
  const email = "yair.steelandwood@gmail.com";
  const password = ")j@91CRwcN7)";
  const passwordRepeat = ")j@91CRwcN7)";

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ email });

    if (user) {
      return { error: "email already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashPassword,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// export const login = async (previousState, formData) => {
//   const { email, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { email, password });
//   } catch (error) {
//     console.log(error);

//     if (error.message.includes("CredentialsSignin")) {
//       return { error: "Invalid email or password" };
//     }
//     throw error;
//   }
// };
