"use client";

import { useRouter } from "next/navigation";
import style from "../posts.module.scss";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function FilterSection() {
  const router = useRouter();
  const [query, setQuery] = useState({});

  const handleFilter = (option: string, value: string) => {
    const newQuery = {
      ...query,
      [option]: value,
    };

    setQuery((prev) => ({
      ...prev,
      [option]: value,
    }));

    const searchParams = new URLSearchParams(newQuery).toString();
    console.log(searchParams);

    router.push(`?${searchParams}`);
  };

  return (
    <div className={style.filterSection}>
      <Select onValueChange={(value) => handleFilter("test1", value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test1-value1">test1 value1</SelectItem>
          <SelectItem value="test1-value2">test1 value2</SelectItem>
          <SelectItem value="test1-value3">test1 value3</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("test2", value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test2-value1">test2 value1</SelectItem>
          <SelectItem value="test2-value2">test2 value2</SelectItem>
          <SelectItem value="test2-value3">test2 value3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
