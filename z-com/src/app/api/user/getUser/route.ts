import { NextRequest, NextResponse } from "next/server";
import { db } from "../../db";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const users = db.User;
    const target = users.find((user) => user.id === id);

    if (target) {
      const { password, age, ...others } = target;
      return NextResponse.json({
        message: "성공",
        user: others,
      });
    }

    return NextResponse.json(
      {
        message: "can't find user",
      },
      {
        status: 404,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "get user 에러",
      error,
    });
  }
}
