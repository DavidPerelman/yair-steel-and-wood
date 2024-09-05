import { connectToDb } from "@/lib/connectToDb";
import { Material } from "@/lib/models/materialModel";
import { NextResponse } from "next/server";

connectToDb();

export const GET = async (request) => {
  try {
    const materials = await Material.find({});

    return NextResponse.json(materials);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
