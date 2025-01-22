export default async function getFollowRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followRecommends`,
    {
      next: {
        tags: ["followRecommends"],
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
}
