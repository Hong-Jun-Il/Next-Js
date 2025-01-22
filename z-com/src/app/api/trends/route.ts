import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    Array.from({ length: 8 }, (_, i) => ({
      tagId: i + 1,
      title: `태그${i + 1}`,
      count: i + 1,
    }))
  );
}
