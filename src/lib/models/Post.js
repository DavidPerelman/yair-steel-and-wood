import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this post."],
      maxlength: [60, "Title cannot be more than 60 characters"],
    },
    content: [
      {
        type: String,
        required: [true, "Please provide content for this post."],
      },
    ],
    images: [
      {
        type: String,
        required: [true, "Please provide at least one image URL."],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
