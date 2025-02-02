import { cn, handleOnInput } from "@/lib/utils";
import { ComponentProps, FormEvent, forwardRef } from "react";

const defaultStyle =
  "w-full h-[52px] rounded-md px-3 py-[14px] bg-[#F6F6F6] text-[#1A1A1D] text-lg leading-6 font-medium placeholder:text-[#C6C6C7] focus:bg-[#FDFDFD] focus:outline-[#1A1A1D]";

// 이름과 id는 반드시 받도록
export const CustomInput = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & {
    name: string;
    id: string;
  }
>(({ type, className, id, onInput, ...props }, ref) => {
  return (
    <input
      // readOnly라면 disabled
      disabled={props.readOnly}
      type={type || "text"}
      className={cn(defaultStyle, className)}
      id={id}
      {...props}
      ref={ref}
      // 한글 maxLength자 입력 방지
      onInput={(e) => {
        if (props.maxLength) {
          return handleOnInput(e, props.maxLength);
        }

        if (onInput) {
          return onInput(e);
        }
      }}
    />
  );
});

CustomInput.displayName = "Input";
