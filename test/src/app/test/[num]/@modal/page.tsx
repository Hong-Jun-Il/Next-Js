import Link from "next/link";

export default function Modal({
  params: { num },
}: {
  params: { num: string };
}) {
  console.log(num);
  return (
    <section className="absolute left-0 top-0 h-full w-full bg-black opacity-55">
      <div className="relative left-1/2 top-1/2 flex h-80 w-80 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-white opacity-100 z-30">
        {num}번이 선택됨
        <Link href="/test" className="cursor-pointer bg-red-500">닫기</Link>
      </div>
    </section>
  );
}
