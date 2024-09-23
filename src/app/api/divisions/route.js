import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Division } from "@/lib/models/divisionModel";
import { unstable_noStore as noStore } from "next/cache";

connectToDb();

export const GET = async () => {
  noStore();

  try {
    await connectToDb();

    const divisions = await Division.find({});

    return NextResponse.json({ divisions });
  } catch (error) {
    console.error("Error fetching divisions:", error.message);
    return NextResponse.json({ message: "Failed to fetch divisions" });
  }
};
