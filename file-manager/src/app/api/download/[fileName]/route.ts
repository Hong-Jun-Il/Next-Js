import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ fileName: string }>;
};

export async function GET(_: NextRequest, { params }: Props) {
  try {
    const { fileName } = await params;

    if (!fileName) {
      return NextResponse.json(
        {
          error: "Filename is required",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
