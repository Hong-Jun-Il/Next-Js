import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-slate-100 w-screen">
      <Link href="/posts">posts로 이동하기</Link>
    </main>
  );
}
