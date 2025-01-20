import Form from "next/form";

export default async function page() {
  return (
    <form action="/test">
      <input type="text" name="input1" defaultValue="dasd" />
    </form>
  );
}
