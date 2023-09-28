"use client";

import { User, Skeleton } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <>
      {session ? (
        <User
          name={session.user.name}
          description="ผู้ใช้งาน"
          avatarProps={{
            src: session.user.image,
          }}
        />
      ) : (
        <div className="min-w-[100px] w-full flex items-center gap-2">
          <div>
            <Skeleton className="flex rounded-full w-10 h-10" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-5/5 rounded-lg" />
            <Skeleton className="h-2 w-3/5 rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
}
