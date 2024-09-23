import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Review } from "@/lib/models/reviewModel";
import { unstable_noStore as noStore } from "next/cache";

connectToDb();

export const GET = async () => {
  noStore();

  try {
    await connectToDb();

    const reviews = await Review.find({});

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
    return NextResponse.json({ message: "Failed to fetch reviews" });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  try {
    const { fullname, email, rating, review, publishedDate } = body;

    const newProject = Review({
      fullname,
      email,
      rating,
      review,
      publishedDate,
    });

    await newProject.save();
    console.log("saved to db");

    return NextResponse.json({ newReview: newProject });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
