"use client";

import { Input } from "@/components/ui/input";
import { useGetAllUsers } from "@/lib/queries";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const usersQuery = useGetAllUsers();
  const [users, setUsers] = useState<UserType[] | undefined>(usersQuery.data);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (usersQuery.data) {
      setUsers(usersQuery.data);
    }
  }, [usersQuery.data]);

  useEffect(() => {
    if (value) {
      setUsers(
        usersQuery.data?.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setUsers(usersQuery.data);
    }
  }, [value]);

  return (
    <section className="flex flex-col items-center justify-center">
      <Input
        className="w-fit"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {users?.map((user) => (
        <>
        <Link href={`/users/${user.id}`} key={user.id}>{user.name}</Link>
        </>
      ))}
    </section>
  );
}

