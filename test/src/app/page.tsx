import Link from "next/link";

export default function page() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Link href="/test">Test 페이지로 이동하기</Link>
    </main>
  );
}
