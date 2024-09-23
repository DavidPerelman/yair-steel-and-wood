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

export const PATCH = async (req) => {
  const body = await req.json();
  const { id, type, data } = body;

  try {
    const filter = { _id: id };
    const update = { [type]: data };
    const newImageAdded = await AboutPageContent.findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      }
    );

    console.log("saved to db");

    return NextResponse.json({ newImageAdded: newImageAdded });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
