import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Review } from "@/lib/models/reviewModel";

connectToDb();

export const GET = async () => {
  try {
    await connectToDb();

    const reviews = await Review.find({});

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    return NextResponse.json({ message: "Failed to fetch reviews" });
  }
};
