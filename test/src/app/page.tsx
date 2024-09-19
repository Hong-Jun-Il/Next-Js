import { fetchInstanse } from "@/lib/api";
import Link from "next/link";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function page() {
  const fetch = await fetchInstanse<PostType>({endPoint: "/posts"});

  console.log(fetch);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Link href="/test">Test 페이지로 이동하기</Link>
    </main>
  );
}
