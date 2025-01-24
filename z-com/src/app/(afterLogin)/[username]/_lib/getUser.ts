export const getUser = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [_1, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/getUser?id=${username}`,
    {
      next: {
        tags: ["users", username],
      },
      cache: "no-store",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
};
