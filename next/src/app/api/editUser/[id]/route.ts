import { NextRequest, NextResponse } from "next/server";
import { database } from "../../database";

type Props = {
  params: {
    id: string;
  };
};

export async function PATCH(req: NextRequest, { params }: Props) {
  try {
    const db = database;

    const body = await req.json();
    const targetId = params.id;

    const targetIndex = db.findIndex((user) => user.id === targetId);

    if (targetIndex !== -1) {
      if (body.id) {
        db[targetIndex].id = body.id;
      }

      if (body.password) {
        db[targetIndex].password = body.password;
      }

      if (body.age) {
        db[targetIndex].age = body.age;
      }
    } else {
      return NextResponse.json(
        {
          message: "no user",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: "데이터 교체 성공",
      db,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "데이터 교체 실패",
    });
  }
}
