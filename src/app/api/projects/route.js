import { connectToDb } from "@/lib/connectToDb";
import { Project } from "@/lib/models/projectModel";
import { NextResponse } from "next/server";

connectToDb();

export const GET = async () => {
  try {
    const posts = await Project.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const slug = "slug";
  const height = parseInt(body.height);
  const width = parseInt(body.width);
  const length = parseInt(body.length);

  console.log(height);

  try {
    const {
      title,
      description,
      thumbnail,
      images,
      price,
      // height,
      // width,
      // length,
      division,
      material,
    } = body;

    const newProject = Project({
      title,
      description,
      thumbnail,
      images,
      price,
      height,
      width,
      length,
      division,
      material,
      slug,
    });

    await newProject.save();
    console.log("saved to db");
    // console.log({
    //   title,
    //   description,
    //   thumbnail,
    //   images,
    //   price,
    //   size,
    //   division,
    //   material,
    //   slug,
    // });

    return NextResponse.json({ newProject: "" });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
