import { cn } from "@/lib/utils";

type Props = {
  required?: boolean;
  labelText?: string;
  htmlFol?: string;
  className?: string;
};

const defaultLabelStyle = "text-[#1A1A1D] font-semibold text-[20px] leading-7";
const defaultRequiredDotStyle = "text-[#FF3D00] align-middle";

export default function CustomLabel(props: Props) {
  return (
    <label
      className={cn(defaultLabelStyle, props.className)}
      htmlFor={props.htmlFol}
    >
      {props.labelText}
      {props.required && <span className={defaultRequiredDotStyle}>*</span>}
    </label>
  );
}
