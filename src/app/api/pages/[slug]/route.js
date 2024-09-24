// app/api/posts/[id]/route.js
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { connectToDb } from "@/lib/mongodb";
import Page from "@/lib/models/pageModel";
import { unstable_noStore as noStore } from "next/cache";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const GET = async (request, { params }) => {
  const { slug } = params;

  await connectToDb();
  const page = await Page.findOne({ slug: slug }).exec();

  noStore();

  if (!page) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }
  return NextResponse.json({ page });
};

export async function PUT(request, { params }) {
  await connectToDb();
  const { _id, title, sections, images } = await request.json();

  try {
    // Validate sections structure
    if (
      !Array.isArray(sections) ||
      sections[0].paragraphs.some((para) => typeof para !== "string")
    ) {
      return NextResponse.json(
        { error: "Invalid sections structure" },
        { status: 400 }
      );
    }

    const existingPage = await Page.findById(_id);
    if (!existingPage) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    // Handle image deletions
    for (const oldImage of existingPage.images) {
      if (!images.includes(oldImage.public_id)) {
        await cloudinary.uploader.destroy(oldImage.public_id);
      }
    }

    // Update the post
    const updatedPage = await Page.findByIdAndUpdate(
      _id,
      { title, sections, images },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      message: "Page updated successfully",
      page: updatedPage,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await connectToDb();

  try {
    const page = await Page.findById(params.id);
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    // Delete associated images from Cloudinary
    for (const image of page.images) {
      const publicId = image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete the Page
    await Page.findByIdAndDelete(params.id);

    return NextResponse.json({
      message: "Page and associated images deleted successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
