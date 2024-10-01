import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import style from "./signUp.module.scss";

type Props<T> = {
  name: Path<T>;
  labelText: string;
  placeHolderText: string;
};

export default function RHFInput<T extends FieldValues>({
  name,
  labelText,
  placeHolderText,
}: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={style.inputWrapper}>
          <FormLabel>{labelText}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeHolderText}
              {...field}
              type={name === "password" ? "password" : "text"}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
