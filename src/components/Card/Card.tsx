import { IconStar } from "@/Icons/Icons";
import Link from "next/link";
import { ButtonAddToCart } from "../Buttons/ButtonAddToCart";

type Props = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export const Card = ({ id, title, price, img }: Props) => {
  return (
    <div
      className="w-[200px] h-[300px] relative rounded-md  group
     hover:shadow-2xl transition-shadow duration-100 lg:w-[240px] lg:h-[335px]"
    >
      <Link href={"#"}>
        <div className="w-full min-w-full h-[180px] lg:h-[220px] bg-white relative px-2">
          <img src={img} alt="" className="w-full h-full object-contain" />
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
      shadow-2xl opacity-0 group-hover:z-20 group-hover:opacity-100"
      >
        <div className="flex justify-center items-center w-full">
          <ButtonAddToCart id={id} />
        </div>
      </div>
    </div>
  );
};
