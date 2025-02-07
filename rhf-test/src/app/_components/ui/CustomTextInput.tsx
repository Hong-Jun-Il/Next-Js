"use client";

import { cn } from "@/lib/utlis";
import { ComponentProps, forwardRef } from "react";

export const CustomTextInput = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<"input">, "type"> & { name: string; id: string }
>(({ name, id, className, readOnly, ...props }, ref) => {
  return (
    <input
      disabled={readOnly}
      type="text"
      className={cn(
        "w-full px-3 py-[14px] text-base rounded-md placeholder:text-gray-500 disabled:bg-white",
        className
      )}
      name={name}
      id={id}
      ref={ref}
      {...props}
    />
  );
});
