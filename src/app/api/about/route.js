import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
// import { unstable_noStore as noStore } from "next/cache";
import { AboutPageContent } from "@/lib/models/aboutPageModel";
import mongoose from "mongoose";

connectToDb();

export const GET = async () => {
  // noStore();

  try {
    await connectToDb();

    const data = await AboutPageContent.find({});

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json({ message: "Failed to fetch data" });
  }
};

// export const PATCH = async (req) => {
//   const body = await req.json();
//   const { id, type, data } = body;

//   try {
//     const filter = { _id: id };
//     const update = { [type]: data };
//     const newImageAdded = await AboutPageContent.findOneAndUpdate(
//       filter,
//       update,
//       {
//         new: true,
//       }
//     );

//     console.log("saved to db");

//     return NextResponse.json({ newImageAdded: newImageAdded });
//   } catch (error) {
//     console.log(error);
//     // throw new Error("Failed to fetch posts");
//     return NextResponse.json({ error: error });
//   }
// };

export const PATCH = async (req) => {
  try {
    const body = await req.json();
    const { id, type, data } = body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const filter = { _id: id };
    const update = { [type]: data };

    const updatedDocument = await AboutPageContent.findOneAndUpdate(
      filter,
      update,
      { new: true }
    );

    if (!updatedDocument) {
      return NextResponse.json(
        { message: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ updatedDocument });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { message: "Failed to update document" },
      { status: 500 }
    );
  }
};
