import { CustomImageInput } from "@/components/customUi/CustomImageInput";

export default function page() {
  const handleSubmitForm = async (formData: FormData) => {
    "use server";
    console.log(formData);
  };

  return (
    <main className="bg-slate-200 w-full h-dvh flex justify-center items-center">
      <form action={handleSubmitForm}>
        <CustomImageInput id="images" name="images" multiple maxImages={3} />
        <button>제출</button>
      </form>
    </main>
  );
}
