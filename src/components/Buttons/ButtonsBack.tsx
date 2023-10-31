import Link from "next/link";
export const ButtonsBack = () => {
  return (
    <Link href="/" className="font-semibold max-w-[90px]">
      <div className="py-1 flex max-w-[90px] items-center  gap-x-1 px-2 rounded-3xl hover:bg-[#00000020] transition-colors duration-200">
        <span className="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#333333"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            />
            <path
              fill="#333333"
              d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            />
          </svg>
        </span>
        <span>Back</span>
      </div>
    </Link>
  );
};
