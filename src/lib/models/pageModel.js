import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  paragraphs: [String],
  banners: [String],
});

const imageSchema = new mongoose.Schema({
  secure_url: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
});

const pageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    sections: [sectionSchema],
    images: [imageSchema],
  },
  {
    timestamps: true, // Optional: Add createdAt and updatedAt timestamps
  }
);

// Check if the model already exists before defining it
const Page = mongoose.models.Page || mongoose.model("Page", pageSchema);

export default Page;
