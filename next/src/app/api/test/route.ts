import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  const response = NextResponse.json({
    message: "성공",
  });

  response.cookies.set("test", "cookie values", {
    httpOnly: true,
  });

  return response;
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("test");
  console.log(cookie);
  return NextResponse.json({
    messsage: "get 성공",
  });
}
