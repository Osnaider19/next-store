"use client";
import { IconCart, IconHeart, IconStar } from "@/Icons/Icons";
import Link from "next/link";
import { ButtonAddToCart } from "../Buttons/ButtonAddToCart";

export const Card = ({
  id,
  title,
  price,
  img,
}: {
  id: number;
  title: string;
  price: number;
  img: string;
}) => {
  return (
    <div
      className="w-[240px] h-[335px] relative rounded-md  group
     hover:shadow-2xl transition-shadow duration-100"
    >
      <Link href={"#"}>
        <div className="w-full min-w-full h-[220px] bg-white relative">
          <img src={img} alt="" className="w-full h-full object-contain" />
          {/* <div className="absolute right-2 top-4 z-20  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <button onClick={() => alert()}>
              <IconHeart />
            </button>
          </div> */}
        </div>
        <div className="px-3 my-2">
          <div className="flex gap-x-1 py-1">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <p className="line-clamp-2 ">{title}</p>
          <span className="font-bold text-xl py-2">${price}</span>
        </div>
      </Link>
      <div
        className="absolute left-0 -bottom-[60px] h-[60px] w-full bg-white 
      shadow-2xl opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-200 "
      >
        <ButtonAddToCart id={id} />
      </div>
    </div>
  );
};
