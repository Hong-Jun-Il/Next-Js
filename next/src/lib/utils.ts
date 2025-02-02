import { clsx, type ClassValue } from "clsx";
import { FormEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 한글 입력시 maxLength보다 한글자 많게 입력되는 현상 방지 함수
export function handleOnInput(
  e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  maxLength: number
) {
  if (e.currentTarget.value.length >= maxLength) {
    e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
  }
}
