"use client";

import { defaultValues, schema, SchemaType } from "@/types/schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "../Form";

export default function RHFProvider() {
  const method = useForm<SchemaType>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...method}>
      <Form />
    </FormProvider>
  );
}
