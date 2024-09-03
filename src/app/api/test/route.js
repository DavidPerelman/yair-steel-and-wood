import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" });
}
