import Link from "next/link";

export default async function page() {

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-slate-400">
      <h1>메인 페이지</h1>
      <Link href="/users">Users</Link>
    </main>
  )
}
