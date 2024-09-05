import { connectToDb } from "@/lib/connectToDb";
import { Division } from "@/lib/models/divisionModel";
import { NextResponse } from "next/server";

connectToDb();

export const GET = async (request) => {
  try {
    const divisions = await Division.find({});

    return NextResponse.json(divisions);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
