"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import style from "../posts.module.scss";

type Props = {
  countries: string[];
  aria: string[];
};

export default function FilterSection({ countries, aria }: Props) {
  console.log(countries, aria);
  return <section className={style.filter}></section>;
}
