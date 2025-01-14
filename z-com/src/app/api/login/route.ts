import { db } from "@/app/api/db";

export async function POST(req: Request) {
  try {
    const users = db.User;
    const { id, password } = await req.json();

    const target = users.find((user) => user.id === id);
    if (!target) {
      return Response.json(
        {
          message: "user not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      message: "asdsa",
    });
  } catch (error) {
    return Response.json({
      message: "error",
      error,
    });
  }
}
