import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { AboutPageContent } from "@/lib/models/aboutPageModel";

connectToDb();

export const GET = async () => {
  noStore();

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
    // Parse the request body
    const body = await req.json();
    const { id, updateFields } = body;

    if (!id || !updateFields || typeof updateFields !== "object") {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    // Construct the dynamic update object based on fields provided
    const update = {};
    for (const key in updateFields) {
      if (Object.prototype.hasOwnProperty.call(updateFields, key)) {
        //+
        update[key] = updateFields[key]; // Dynamically add fields to the update object
      }
    }

    // Find the document by ID and update it with dynamic fields
    const updatedDocument = await AboutPageContent.findOneAndUpdate(
      { _id: id },
      { $set: update }, // $set to update only the fields provided
      { new: true } // Return the updated document
    );

    if (!updatedDocument) {
      return NextResponse.json(
        { message: "Document not found" },
        { status: 404 }
      );
    }

    // Return the updated document
    return NextResponse.json({ updatedDocument });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { message: "Failed to update document" },
      { status: 500 }
    );
  }
};
