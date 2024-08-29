"use server";

import { connectToDb } from "../connectToDb";
import bcrypt from "bcryptjs";
import { User } from "../models";

export const register = async (values) => {
  const { email, password } = values;

  try {
    await connectToDb();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
  } catch (e) {
    console.log(e);
  }
};
