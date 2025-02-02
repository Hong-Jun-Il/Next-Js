"use client";

import {
  userSchema,
  userSchemaDefaultValues,
  UserSchemaType,
} from "@/type/schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserForm from "./UserForm";

export default function UserFormProvider() {
  const method = useForm<UserSchemaType>({
    mode: "all",
    resolver: zodResolver(userSchema),
    defaultValues: userSchemaDefaultValues,
  });
  return (
    <FormProvider {...method}>
      <UserForm />
    </FormProvider>
  );
}
