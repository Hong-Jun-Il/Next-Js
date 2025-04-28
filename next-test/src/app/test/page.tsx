import HorizentalScroll from "./_components/HorizentalScroll";

export default function Test() {
  return (
    <>
      <section className="h-[110dvh] flex items-center justify-center w-full bg-amber-200">
        섹션1
      </section>
      <HorizentalScroll />
      <section className="h-[156dvh] flex items-center justify-center w-full bg-blue-500">
        섹션3
      </section>
    </>
  );
}
