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
  return <textarea className={cn()} name={name} id={id} {...props} ref={ref} />;
});
