import Form from "./_components/form";
import List from "./_components/list";

export default function Home() {
  console.log(process.cwd());
  return (
    <main>
      <Form />
      <List />
    </main>
  );
}
