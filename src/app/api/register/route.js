import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/models";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectToDb();

  try {
    // const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash("123456", 10);

    const newuser = {
      name: "David Perelman",
      email: "dperelman1@gmail.com",
      password: hashedPassword,
    };

    const userFound = await User.findOne({ email: newuser.email });
    if (userFound) {
      return NextResponse.json({
        message: "Email already exists!",
        succeess: false,
      });
    }

    const user = new User(newuser);
    const savedUser = await user.save();

    return NextResponse.json({
      message: "User created successfully!",
      succeess: true,
      user: savedUser,
    });
  } catch (error) {
    console.log(error);
  }
}
