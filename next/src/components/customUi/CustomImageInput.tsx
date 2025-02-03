"use client";

import { ComponentProps, forwardRef } from "react";

export const CustomImageInput = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<"input">, "type">
>(({ name, id }, ref) => {
  return (
    <>
      <label htmlFor={id}>라벨</label>
      <input
        type="file"
        name={name}
        id={id}
        accept="image/*"
        ref={ref}
        hidden
      />
    </>
  );
});

CustomImageInput.displayName = "Input";
