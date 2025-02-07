"use client";

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { CustomTextInput } from "../ui/CustomTextInput";

type Props<T extends FieldValues> = {
  id: string;
  name: Path<T>;
};

export default function RHFTextField<T extends FieldValues>({
  id,
  name,
}: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <CustomTextInput id={id} {...field} />}
    />
  );
}
