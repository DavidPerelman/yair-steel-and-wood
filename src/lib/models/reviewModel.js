import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  fullname: { type: String, required: true, max: 50 },
  email: { type: String, required: true, max: 50 },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  publishedData: { type: String, required: true },
});

export const Review =
  mongoose.models?.Review || mongoose.model("Review", reviewSchema);
