import { connectToDb } from "@/lib/connectToDb";
import { Project } from "@/lib/models/projectModel";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Project.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Project.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};
