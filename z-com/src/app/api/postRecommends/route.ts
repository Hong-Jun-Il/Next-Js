import { db } from "../db";

export async function GET() {
  try {
    const posts = db.Posts;
    return Response.json({
      message: "post 조회 성공",
      posts,
    });
  } catch (error) {
    return Response.json({
      message: "post 조회 실패",
      error,
    });
  }
}
