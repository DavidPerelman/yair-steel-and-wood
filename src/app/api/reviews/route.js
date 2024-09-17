import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    return NextResponse.json({ success: "true" });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};
