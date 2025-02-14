import { NextRequest, NextResponse } from "next/server";
import { database } from "../database";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const data = database.find((user) => user.id === id);

    if (data) {
      return NextResponse.json({
        message: "성공",
        data,
      });
    } else {
      return NextResponse.json(
        {
          message: "no user",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    return NextResponse.json({
      message: "에러남",
    });
  }
}
