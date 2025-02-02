import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type LabelType = ComponentProps<"label"> & {
  htmlFor: string;
  labelText: string;
  required?: boolean;
  maxLength?: number;
  currentLength?: number;
};

const defaultLabelStyle =
  "text-[#1A1A1D] font-semibold text-[20px] leading-7 w-fit";
const defaultRequiredDotStyle = "text-[#FF3D00] align-middle";
const defaultValueLengthStyle = "text-[#6A6A6C] font-medium text-lg";

export default function CustomLabel(props: LabelType) {
  return (
    <label
      className={cn(
        defaultLabelStyle,
        props.className,
        props.maxLength ? "w-full flex justify-between" : "w-fit"
      )}
      htmlFor={props.htmlFor}
    >
      <div>
        {props.labelText}
        {props.required && <span className={defaultRequiredDotStyle}>*</span>}
      </div>
      <span className={defaultValueLengthStyle}>
        {props.maxLength && `${props.currentLength}자/${props.maxLength}자`}
      </span>
    </label>
  );
}
