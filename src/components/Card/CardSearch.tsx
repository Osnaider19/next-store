import React from "react";
import { ButtonAddToCart } from "../Buttons/ButtonAddToCart";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export const CardSearch = ({ id, title, price, img }: Props) => {
  return (
    <Link href={"#"}>
      <div className="w-full flex relative items-center bg-white rounded-md overflow-hidden hover:shadow-2xl transition-shadow duration-100 mb-3  px-2">
        <div className="min-w-[170px] w-full flex justify-center items-center  
         max-w-[170px] min-h-[128px] h-full max-h-[128px]">
          <img
            src={img}
            alt={`imagen de ${title}`}
            className=" min-w-[170px] w-full max-w-[170px] min-h-[128px] h-full max-h-[128px] object-contain "
          />
        </div>
        <div className="px-3 flex flex-col justify-between items-stretch min-h-full  h-full">
          <p className="py-1">
           {title}
          </p>
          <p className="font-semibold py-1">${price}</p>
          <div className="py-2">
            <ButtonAddToCart id={id} />
          </div>
        </div>
      </div>
    </Link>
  );
};
