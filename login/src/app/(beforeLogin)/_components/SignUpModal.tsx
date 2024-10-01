"use client";

import { SignUpSchemaType } from "@/types/schema";
import RHFInput from "./RHFInput";
import style from "./signUp.module.scss";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function SignUpModal() {
  const { handleSubmit } = useFormContext<SignUpSchemaType>();

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.signUp}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.modal}>
        <RHFInput<SignUpSchemaType>
          name="name"
          labelText="이름"
          placeHolderText="이름을 입력해주세요"
        />
        <RHFInput<SignUpSchemaType>
          name="email"
          labelText="이메일"
          placeHolderText="이메일을 입력해주세요"
        />
        <RHFInput<SignUpSchemaType>
          name="nickname"
          labelText="닉네임"
          placeHolderText="닉네임을 입력해주세요"
        />
        <RHFInput<SignUpSchemaType>
          name="id"
          labelText="아이디"
          placeHolderText="아이디를 입력해주세요"
        />
        <RHFInput<SignUpSchemaType>
          name="password"
          labelText="비밀번호"
          placeHolderText="비밀번호를 입력해주세요"
        />
        <Button>제출하기</Button>
        <BackButton />
      </form>
    </div>
  );
}
