"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";

type Props = {
  children: ReactNode;
  // schema: T
};

export default function RHFProvider({ children }: Props) {
  const methods = useForm({
    // resolver: zodResolver()
  });
  return <div>RHFProvider</div>;
}
