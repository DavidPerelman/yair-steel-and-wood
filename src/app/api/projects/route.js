import { connectToDb } from "@/lib/mongodb";
import { Project } from "@/lib/models/projectModel";
import { NextResponse } from "next/server";
import { uuid } from "uuidv4";
import { unstable_noStore as noStore } from "next/cache";

connectToDb();

export const GET = async () => {
  noStore();

  try {
    await connectToDb();

    const projects = await Project.find({});

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    return NextResponse.json({ message: "Failed to fetch projects" });
  }
};

// export const POST = async (req) => {
//   const body = await req.json();
//   const slug = uuid();
//   const height = parseInt(body.height);
//   const width = parseInt(body.width);
//   const length = parseInt(body.length);

//   try {
//     const { title, description, thumbnail, images, price, division, material } =
//       body;

//     const newProject = Project({
//       title,
//       description,
//       thumbnail,
//       images,
//       price,
//       height,
//       width,
//       length,
//       division,
//       material,
//       slug,
//     });

//     const newProjectAdded = await newProject.save();
//     console.log("saved to db");

//     return NextResponse.json({ newProjectAdded });
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to fetch posts");
//   }
// };

export async function POST(request) {
  await connectToDb();
  const {
    title,
    description,
    images,
    thumbnail,
    price,
    height,
    width,
    length,
    division,
    material,
  } = await request.json();
  const slug = uuid();

  try {
    if (
      !title ||
      !description ||
      !Array.isArray(description) ||
      description.length === 0 ||
      !thumbnail ||
      !images ||
      !Array.isArray(images) ||
      images.length === 0 ||
      !price ||
      !width ||
      !length ||
      !division ||
      !material
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const newProject = new Project({
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

    return NextResponse.json(
      { message: "Page created successfully", newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
