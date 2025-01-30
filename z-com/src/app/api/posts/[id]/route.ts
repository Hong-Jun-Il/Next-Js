import { NextRequest, NextResponse } from "next/server";
import { db } from "../../db";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  try {
    const { id } = await params;
    const posts = db.Posts;

    const target = posts.find((post) => post.postId === Number(id));

    if (target) {
      return NextResponse.json({
        message: "get single post 성공",
        post: target,
      });
    }

    return NextResponse.json(
      {
        message: "can't find single post",
      },
      {
        status: 404,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "get single post 실패",
      error,
    });
  }
}
