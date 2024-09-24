// app/api/posts/[id]/route.js
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { connectToDb } from "@/lib/mongodb";
import Post from "@/lib/models/Post";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request, { params }) {
  await connectToDb();
  const post = await Post.findById(params.id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request, { params }) {
  await connectToDb();
  const { title, content, images } = await request.json();

  try {
    // Validate content structure
    if (
      !Array.isArray(content) ||
      content.some((para) => typeof para !== "string")
    ) {
      return NextResponse.json(
        { error: "Invalid content structure" },
        { status: 400 }
      );
    }

    const existingPost = await Post.findById(params.id);
    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Handle image deletions
    for (const oldImage of existingPost.images) {
      if (!images.includes(oldImage)) {
        const publicId = oldImage.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }
    }

    // Update the post
    const updatedPost = await Post.findByIdAndUpdate(
      params.id,
      { title, content, images },
      { new: true, runValidators: true }
    );

    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await connectToDb();

  try {
    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Delete associated images from Cloudinary
    for (const image of post.images) {
      const publicId = image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete the post
    await Post.findByIdAndDelete(params.id);

    return NextResponse.json({
      message: "Post and associated images deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
