"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { ZodType } from "zod";

type Props<T extends FieldValues> = {
  children: ReactNode;
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
};

export default function RHFProvider<T extends FieldValues>({
  children,
  schema,
  defaultValues,
}: Props<T>) {
  const methods = useForm<T>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
