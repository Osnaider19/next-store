import Link from "next/link";
export const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-starts min-h-full flex-grow lg:flex-grow-0">
      <Link href="/">
        <img src="../Logo.svg" alt="" />
      </Link>
    </div>
  );
};
