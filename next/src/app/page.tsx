import { CustomInput } from "@/components/customUi/CustomInput";
import UserFormProvider from "./_components/User/UserFormProvider";
import CustomLabel from "@/components/customUi/CustomLabel";
import { CustomTextarea } from "@/components/customUi/CustomTextarea";
import { CustomImageInput } from "@/components/customUi/CustomImageInput";

export default function page() {
  return (
    <main className="bg-slate-200 w-full h-dvh flex justify-center items-center">
      {/* <UserFormProvider /> */}
      <CustomImageInput id="id" name="name" />
    </main>
  );
}
