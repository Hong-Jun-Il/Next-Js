import React from "react";
import RHFProvider from "./_common/RHFProvider";
import { TestDefaultValues, TestSchema, TestSchemaType } from "@/type/schema";

export default function UserForm() {
  return (
    <RHFProvider schema={TestSchema} defaultValues={TestDefaultValues}>
      <form></form>
    </RHFProvider>
  );
}
