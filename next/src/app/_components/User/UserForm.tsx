"use client";

import RHFTextField from "@/components/customUi/RHFTextField";
import { UserSchemaType } from "@/type/schema";
import { useFormContext } from "react-hook-form";

export default function UserForm() {
  const { reset } = useFormContext<UserSchemaType>();
  return (
    <form className="border border-black w-[500px] h-[700px]">
      <RHFTextField<UserSchemaType>
        name="id"
        id="id"
        placeholder="아이디"
        maxLength={10}
        labelText="사전질문 2"
      />
      <RHFTextField<UserSchemaType>
        name="password"
        id="password"
        placeholder="비밀번호"
      />
      <RHFTextField<UserSchemaType> name="age" id="age" placeholder="나이" />
    </form>
  );
}
