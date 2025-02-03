"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

export const CustomTextarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea"> & {
    name: string;
    id: string;
  }
>(({ name, id, className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "rounded-md px-3 py-[14px] bg-[#F6F6F6] text-[18px] text-[#1A1A1D] font-medium w-full placeholder:text-[#C6C6C7]",
        className
      )}
      name={name}
      id={id}
      {...props}
      ref={ref}
    />
  );
});
