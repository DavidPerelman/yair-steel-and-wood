import { Material } from "@/lib/models/materialModel";
import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

connectToDb();

export const GET = async () => {
  try {
    await connectToDb();

    const materials = await Material.find({});
    console.log(materials);

    return NextResponse.json({ materials });
  } catch (error) {
    console.error("Error fetching materials:", error.message);
    return NextResponse.json({ message: "Failed to fetch materials" });
  }
};
