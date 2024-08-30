import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.AUTH_SECRET,
  });

  const publicPaths = path === "/" || path === "/admin";

  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/panel", req.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin", "/panel"],
};
