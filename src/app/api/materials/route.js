import { Material } from "@/lib/models/materialModel";
import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

connectToDb();

export const GET = async () => {
  noStore();

  try {
    await connectToDb();

    const materials = await Material.find({});

    return NextResponse.json({ materials });
  } catch (error) {
    console.error("Error fetching materials:", error.message);
    return NextResponse.json({ message: "Failed to fetch materials" });
  }
};
