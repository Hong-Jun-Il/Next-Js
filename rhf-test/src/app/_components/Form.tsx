"use client";

import { SchemaType } from "@/types/schema";
import { useFormContext } from "react-hook-form";
import { CustomTextInput } from "./ui/CustomTextInput";
import RHFTextField from "./RHF/RHFTextField";

export default function Form() {
  const { register, watch } = useFormContext<SchemaType>();
  console.log(watch("name"));
  return (
    <form className="border border-black flex flex-col rounded-md w-[500px] h-[700px] items-center">
      <RHFTextField<SchemaType> name="name" id="name" />
    </form>
  );
}
