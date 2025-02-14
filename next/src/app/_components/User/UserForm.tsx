"use client";

import RHFTextField from "@/components/customUi/RHFTextField";
import { useEditUser } from "@/hooks/mutations";
import { useUser, useUsers } from "@/hooks/queries";
import { UserSchemaType } from "@/type/schema";
import { useEffect, useState } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";

const users = ["user1", "user2", "user3"];

export default function UserForm() {
  const [targetUserId, setTargetUserId] = useState<string | null>(null);
  const { reset, handleSubmit } = useFormContext<UserSchemaType>();

  const { data: user, isLoading } = useUser(targetUserId);

  const usersData = useUsers(users);
  const editUserMutation = useEditUser();

  const handleEditUser: SubmitHandler<UserSchemaType> = (data) => {
    editUserMutation.mutate(data);
  };

  useEffect(() => {
    if (user?.data) {
      reset(user.data);
    }
  }, [user?.data, reset]);

  const handleUserClick = (id: string) => {
    setTargetUserId(id);
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <>
      <form
        className="border border-black w-[500px] h-[700px]"
        onSubmit={handleSubmit(handleEditUser)}
      >
        <ul className="flex gap-x-3 cursor-pointer">
          {users.map((user) => (
            <li key={user} onClick={() => handleUserClick(user)}>
              {user}
            </li>
          ))}
        </ul>
        <RHFTextField<UserSchemaType>
          name="id"
          id="id"
          placeholder="아이디"
          labelText="아이디"
        />
        <RHFTextField<UserSchemaType>
          name="password"
          id="password"
          placeholder="비밀번호"
          labelText="비밀번호"
        />
        <RHFTextField<UserSchemaType>
          name="age"
          id="age"
          placeholder="나이"
          labelText="나이"
        />
        <button>제출</button>
      </form>
      <ul>
        {usersData.map(({ data }, i) => (
          <li key={data?.data.id ?? i}>
            <h3>{data?.data.id}</h3>
            <div>{data?.data.password}</div>
            <div>{data?.data.age}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
