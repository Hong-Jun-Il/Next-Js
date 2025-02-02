"use client";

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { CustomInput } from "./CustomInput";
import CustomLabel from "./CustomLabel";
import { ComponentProps } from "react";
import CustomErrorMessage from "./CustomErrorMessage";

type LabelType = ComponentProps<"label">;
type InputType = ComponentProps<"input">;

// input에 들어갈 name과 id는 반드시 필요
// 어떤 타입을 가진 필드인지 명확하게 타입을 좁히기 위해 zod 스키마의 제네릭을 받음
type Props<T extends FieldValues> = Omit<LabelType & InputType, "className"> & {
  name: Path<T>;
  id: string;
  labelText?: string;
  wrapperDivClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
};

export default function RHFTextField<T extends FieldValues>({
  name,
  id,
  labelText,
  htmlFor,
  wrapperDivClassName, // wrapper div style
  labelClassName, // label style
  inputClassName, // input style
  messageClassName, // message style
  ...props
}: Props<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={wrapperDivClassName}>
          {labelText && (
            <CustomLabel
              labelText={labelText}
              // htmlFor이 확실히 지정되어 있지 않다면 id값으로 지정
              htmlFor={htmlFor || id}
              currentLength={field.value.length}
              {...props}
            />
          )}
          <CustomInput
            id={id}
            className={inputClassName}
            {...props}
            {...field}
          />
          {errors[name]?.message && (
            <CustomErrorMessage
              message={(errors[name]?.message as string) || "오류 발생"}
            />
          )}
        </div>
      )}
    />
  );
}
