export async function getTrends() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trends`, {
    next: {
      tags: ["trends"],
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
}
