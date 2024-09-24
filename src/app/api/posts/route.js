// app/api/posts/route.js
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import Post from "@/lib/models/Post";

export async function GET() {
  await connectToDb();
  const posts = await Post.find({});
  return NextResponse.json({ posts });
}

export async function POST(request) {
  await connectToDb();

  try {
    const { title, content, images } = await request.json();

    // Validate input
    if (!title || !content || !Array.isArray(content) || content.length === 0) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const post = await Post.create({
      title,
      content,
      images,
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
