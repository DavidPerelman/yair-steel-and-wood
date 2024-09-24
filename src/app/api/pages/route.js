import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import Page from "@/lib/models/pageModel";

export async function POST(request) {
  await connectToDb();

  try {
    const { title, sections, images } = await request.json();

    if (
      !title ||
      !sections ||
      !Array.isArray(sections) ||
      sections.length === 0
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const newPage = new Page({ title, sections, images });
    await newPage.save();

    return NextResponse.json(
      { message: "Page created successfully", newPage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
