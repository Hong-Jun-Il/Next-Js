"use client";

import { LoginSchemaType } from "@/app/types/schema";
import style from "./login.module.scss";
import RHFInput from "./RHFInput";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginModal() {
  const { handleSubmit } = useFormContext<LoginSchemaType>();
  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      console.log(result);

      if (result?.error) {
        console.log(result.error);
        throw new Error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={style.modalBg}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginModal}>
        <RHFInput<LoginSchemaType>
          name="id"
          labelText="아이디"
          placeHolderText="아이디"
        />
        <RHFInput<LoginSchemaType>
          name="password"
          labelText="비밀번호"
          placeHolderText="비밀번호"
        />
        <Button>로그인</Button>
      </form>
    </div>
  );
}
