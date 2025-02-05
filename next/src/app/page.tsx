import { CustomInput } from "@/components/customUi/CustomInput";
import UserFormProvider from "./_components/User/UserFormProvider";
import CustomLabel from "@/components/customUi/CustomLabel";
import { CustomTextarea } from "@/components/customUi/CustomTextarea";
import { CustomImageInput } from "@/components/customUi/CustomImageInput";

export default function page() {
  const handleSubmitForm = async (formData: FormData) => {
    "use server";
    console.log(formData.get("images"));
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
