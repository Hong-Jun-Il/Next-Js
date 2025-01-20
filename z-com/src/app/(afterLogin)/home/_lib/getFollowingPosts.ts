export default async function getFollowingPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
    {
      next: {
        tags: ["posts", "followings"],
      },
      credentials: "include",
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    throw new Error("HTTP ERROR");
  }

  return response.json();
}
