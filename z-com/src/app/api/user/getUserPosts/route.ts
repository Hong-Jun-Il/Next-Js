import { NextRequest, NextResponse } from "next/server";
import { db } from "../../db";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("id");
    const posts = db.Posts;
    const target = posts.filter((post) => post.User.id === userId);

    if (target) {
      return NextResponse.json({
        message: "get user posts 성공",
        posts: target,
      });
    }

    return NextResponse.json(
      {
        message: "can't find user posts",
      },
      {
        status: 404,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "get user posts error",
      error,
    });
  }
}
