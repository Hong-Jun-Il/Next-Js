import { db } from "../db";

export async function GET() {
  try {
    const { followingPosts } = db;
    return Response.json({
      message: "following posts 조회 성공",
      followingPosts,
    });
  } catch (error) {
    return Response.json({
      message: "following posts 조회 실패",
      error,
    });
  }
}
