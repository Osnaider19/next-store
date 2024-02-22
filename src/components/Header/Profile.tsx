"use client";
import { UserButton } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";
export const Profile = () => {
  const user = useSession();
  return (
    <>
      {user.session ? (
        <UserButton afterSignOutUrl="/"/>
      ) : (
        <Link
          href={"/sign-in"}
          className="py-3 px-5 block  w-full min-w-full bg-[#0156FF] rounded-md text-white "
        >
          Sign In
        </Link>
      )}
    </>
  );
};
