import mongoose from "mongoose";

const aboutPageSchema = new mongoose.Schema(
  {
    header: { type: String, required: true },
    content: [{ type: String, required: true }],
    backgroundImage: { type: String, required: true },
  },
  { timestamps: true }
);

export const AboutPageContent =
  mongoose.models?.AboutPageContent ||
  mongoose.model("AboutPageContent", aboutPageSchema);
