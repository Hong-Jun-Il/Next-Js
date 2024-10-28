import { SchoolType } from "@/types/SchoolType";

type Props = {
  country?: string;
  aria?: string;
};

type ResType = {
  message: string;
  schools: SchoolType[];
};

export async function getSchools({ country, aria }: Props): Promise<ResType> {
  console.log(country, aria);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/schools?country=${country}&aria=${aria}`
  );
  console.log("실행됨");

  if (!response.ok) {
    throw new Error("HTTP ERROR");
  }

  return response.json();
}
