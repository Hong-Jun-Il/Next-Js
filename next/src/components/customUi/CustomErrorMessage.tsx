import { cn } from "@/lib/utils";

type Props = {
  message: string;
  className?: string;
};

const defaultStyle = "font-medium text-[#FF3D00] text-base";

export default function CustomErrorMessage({ message, className }: Props) {
  return <div className={cn(defaultStyle, className)}>{message}</div>;
}
