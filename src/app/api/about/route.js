import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { AboutPageContent } from "@/lib/models/aboutPageModel";

connectToDb();

export const GET = async () => {
  noStore();

  try {
    await connectToDb();

    const data = await AboutPageContent.find({});

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({ message: "Failed to fetch data" });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  try {
    const { header, content } = body;

    const newContent = AboutPageContent({
      header,
      content,
    });

    const newContentAdded = await newContent.save();
    console.log("saved to db");

    return NextResponse.json({ newContentAdded });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
