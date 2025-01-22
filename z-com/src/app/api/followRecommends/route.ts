import { NextResponse } from "next/server";
import { db } from "../db";

export async function GET() {
  try {
    const users = db.User;

    const userWithoutPassword = users.slice(0, 3).map((user) => {
      const { password, age, ...others } = user;
      return others;
    });

    return NextResponse.json({
      message: "get follow recommends 성공",
      followRecommends: userWithoutPassword,
    });
  } catch (error) {
    return NextResponse.json({
      message: "get follow recommends 실패",
      error,
    });
  }
}
