import { connectToDb } from "@/lib/connectToDb";
import { Review } from "@/lib/models/reviewModel";
import { NextResponse } from "next/server";

connectToDb();

export const GET = async () => {
  try {
    const reviews = await Review.find();
    return NextResponse.json(reviews);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Reviews");
  }
};

export const POST = async (req) => {
  const body = await req.json();

  try {
    const { fullname, email, rating, review, publishedData } = body;

    const newReview = Review({
      fullname,
      email,
      rating,
      review,
      publishedData,
    });

    await newReview.save();
    console.log("saved to db");

    return NextResponse.json({ newReview: newReview });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
