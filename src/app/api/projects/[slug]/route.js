import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import { Project } from "@/lib/models/projectModel";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    console.log(`Attempting to fetch project with slug: ${slug}`);

    await connectToDb();

    const project = await Project.findOne({ slug });

    if (!project) {
      console.log(`No project found with slug: ${slug}`);
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { message: "Failed to fetch project", error: error.message },
      { status: 500 }
    );
  }
};
