"use client";
import { UserButton } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";
export const Profile = () => {
  const user = useSession();
  return (
    <div>
      {user.session ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link
          href={"/sign-up"}
          className="py-2 px-4 bg-[#0156FF] rounded-3xl text-white "
        >
          Sign Up
        </Link>
      )}
    </div>
  );
};
