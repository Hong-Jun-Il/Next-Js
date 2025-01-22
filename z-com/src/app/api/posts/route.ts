import { NextRequest } from "next/server";
import { db } from "../db";

export async function GET(req: NextRequest) {
  try {
    let posts = db.Posts;
    const params = req.nextUrl.searchParams;
    const q = params.get("q");
    const f = params.get("f");
    console.log(typeof posts[0].createdAt);

    if (q) {
      posts = posts.filter((post) => post.content.includes(q));
    }

    if (f) {
      posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    return Response.json({
      message: "성공",
      posts,
    });
  } catch (error) {
    Response.json({
      error,
      message: "실패",
    });
  }
}
