"use client";

import {
  LoginDefaultValues,
  LoginSchema,
  LoginSchemaType,
} from "@/app/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import LoginModal from "./LoginModal";

export default function LoginProvider() {
  const methods = useForm<LoginSchemaType>({
    mode: "all",
    resolver: zodResolver(LoginSchema),
    values: LoginDefaultValues,
  });
  return (
    <FormProvider {...methods}>
      <LoginModal />
    </FormProvider>
  );
}
