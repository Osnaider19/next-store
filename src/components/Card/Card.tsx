
import { IconCart, IconHeart, IconStar } from "@/Icons/Icons";
import Link from "next/link";

export const Card = () => {
  return (
    <Link href={"#"}>
      <div
        className="w-[240px] h-[335px] relative rounded-md  group
     hover:shadow-2xl transition-shadow duration-100"
      >
        <div className="w-full min-w-full h-[220px] bg-white relative">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_2X_919598-MCO52703558976_122022-T.webp"
            alt=""
            className="w-full h-full object-contain"
          />
          <div className="absolute right-2 top-4 z-10  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button>
              <IconHeart />
            </button>
          </div>
        </div>
        <div className="px-3 my-2">
          <div className="flex gap-x-1 py-1">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <p className="line-clamp-2 ">
            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On
          </p>
          <span className="font-bold text-xl py-2">$400</span>
        </div>
        <div
          className="absolute left-0 -bottom-[60px] h-[60px] w-full bg-white 
      shadow-2xl opacity-0 group-hover:z-20 group-hover:opacity-100"
        >
          <div className="flex justify-center items-center">
            <button className="text-[#0156FF] flex border-[#0156FF] border px-5 py-2 justify-center items-center rounded-3xl">
              <span className="block">
                <IconCart />
              </span>
              <span className="font-semibold">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
