"use client";

import {
  SignUpDefaultValues,
  SignUpSchema,
  SignUpSchemaType,
} from "@/app/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import SignUpModal from "./SignUpModal";

export default function SignUpProvider() {
  const methods = useForm<SignUpSchemaType>({
    mode: "all",
    resolver: zodResolver(SignUpSchema),
    defaultValues: SignUpDefaultValues,
  });

  return (
    <FormProvider {...methods}>
      <SignUpModal />
    </FormProvider>
  );
}
