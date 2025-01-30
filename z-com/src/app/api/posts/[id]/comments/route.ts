import generateDate from "@/app/api/_lib/generateData";
import generateImages from "@/app/api/_lib/generateImages";
import { faker } from "@faker-js/faker";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  try {
    // const { id } = await params;

    return NextResponse.json({
      message: "get comments 성공",
      comments: Array.from(
        {
          length: 15,
        },
        (_, i) => ({
          postId: i + 1,
          User: {
            id: "user1",
            nickname: "user1 nickname",
            image: faker.image.avatar(),
          },
          content: `comments${i + 1} comments${i + 1} comments${
            i + 1
          } comments${i + 1} comments${i + 1}`,
          createdAt: generateDate(),
          Images: generateImages(),
        })
      ),
    });
  } catch (error) {
    return NextResponse.json({
      message: "get comments 실패",
      error,
    });
  }
}
