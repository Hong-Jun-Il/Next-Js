import { revalidatePath } from "next/cache";

export async function getPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`,
    {
      next: {
        tags: ["posts"],
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("GET POSTS 에러!");
  }

  revalidatePath("/protectedroute");

  return response.json();
}
