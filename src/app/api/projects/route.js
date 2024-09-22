import { connectToDb } from "@/lib/mongodb";
import { Project } from "@/lib/models/projectModel";
import { NextResponse } from "next/server";

connectToDb();

export const GET = async () => {
  try {
    await connectToDb();

    const projects = await Project.find({});

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return NextResponse.json({ message: "Failed to fetch projects" });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const slug = "slug";
  const height = parseInt(body.height);
  const width = parseInt(body.width);
  const length = parseInt(body.length);

  try {
    const { title, description, thumbnail, images, price, division, material } =
      body;

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

    return NextResponse.json({ newProject: "" });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
