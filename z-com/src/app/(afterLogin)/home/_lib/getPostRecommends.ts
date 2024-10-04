import { revalidatePath } from "next/cache";

export async function getPostRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  revalidatePath("/home");

  return res.json();
}
