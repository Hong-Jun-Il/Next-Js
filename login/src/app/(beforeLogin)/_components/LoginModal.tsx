"use client";

import { LoginSchemaType } from "@/types/schema";
import style from "./login.module.scss";
import RHFInput from "./RHFInput";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();
  const { handleSubmit, setError } = useFormContext<LoginSchemaType>();
  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (result?.error) {
        if (result.code?.includes("아이디")) {
          setError("id", { message: "아이디가 맞지 않습니다" });
        } else {
          setError("password", { message: "비밀번호가 맞지 않습니다" });
        }
        throw new Error(result.code);
      }

      router.replace("/home");
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
