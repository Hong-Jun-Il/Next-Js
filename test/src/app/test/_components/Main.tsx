import Link from "next/link";

export default function Main() {
    const array: number[] = Array.from({length: 10}, (_, i)=>i+1);
  return (
    <section className="w-screen min-h-screen bg-slate-400 grid grid-cols-5">
        {array.map((num, i)=>(
            <Link href={`/test/${num}`} key={num} className="border border-red-500 flex justify-center items-center cursor-pointer">
                {num}
            </Link>
        ))}
    </section>
  );
}
