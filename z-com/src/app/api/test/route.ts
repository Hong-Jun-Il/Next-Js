export async function GET(req: Request) {
  console.log("요청이 왔음");

  return Response.json({
    message: "요청이 옴",
  });
}
