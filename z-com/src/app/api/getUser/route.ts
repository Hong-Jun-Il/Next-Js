import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    console.log(id, "SAdsad");

    return NextResponse.json({
      message: "성공",
    });
  } catch (error) {
    return NextResponse.json({
      message: "",
    });
  }
}
