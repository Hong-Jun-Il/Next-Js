import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(
      `http://localhost:3000/i/flow/login?redirectedFrom=${req.nextUrl.pathname}`
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
