import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json({
      message: "성공",
    });
  } catch (error) {
    return NextResponse.json({
      message: "에러남",
    });
  }
}
