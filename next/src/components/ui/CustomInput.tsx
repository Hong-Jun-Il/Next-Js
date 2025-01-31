"use client";

import { cn } from "@/lib/utils";
import {
  ChangeEvent,
  type DetailedHTMLProps,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
} from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  max?: number;
  minLnegth?: number;
  min?: number;
}

const defaultStyle =
  "w-full h-14 rounded-[8px] bg-inputBg placeholder-gray-5 border border-borderGray p-4 focus:outline-none focus:border-inputFocusBorder focus:text-white-1 focus:bg-inputFocusBg";

export default function CustomInput(props: Props) {
  return (
    <input
      type={props.type || "text"}
      className={cn(
        defaultStyle,
        props.className,
        props.readOnly && "text-white-1"
      )}
      disabled={props.readOnly}
      {...props}
    />
  );
}
