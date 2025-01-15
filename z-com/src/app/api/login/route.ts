import { db } from "@/app/api/db";

export async function POST(req: Request) {
  try {
    const users = db.User;
    // const { id, password } = await req.json();

    // const target = users.find((user) => user.id === id);
    // if (!target) {
    //   return Response.json(
    //     {
    //       message: "id를 확인해주세요요",
    //     },
    //     {
    //       status: 404,
    //     }
    //   );
    // }

    // if (target.password !== password) {
    //   return Response.json(
    //     {
    //       message: "비밀번호를 확인해주세요",
    //     },
    //     {
    //       status: 401,
    //     }
    //   );
    // }

    // const { password: pw, ...rest } = target;

    return Response.json(users[1]);
  } catch (error) {
    return Response.json({
      message: "error",
      error,
    });
  }
}
