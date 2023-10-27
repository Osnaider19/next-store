import { useCartStore } from "@/store/cartStore";
import React from "react";

export const ButtonsQuantity = ({ id }: { id: number }) => {
  const deleteOneCart = useCartStore((state) => state.removeOneFromCart);
  const MoreQuantity = useCartStore((state) => state.addToCart);
  const handelLessQuantity = () => {
    deleteOneCart(id);
  };
  const handelMoreQuantity = () => {
    MoreQuantity(id);
  };
  return (
    <>
      <button
        className="w-[25px] h-[25px]  rounded-sm hover:bg-black/10 transition-colors duration-200 active:scale-95 text-xl text-center"
        onClick={handelMoreQuantity}
      >
        +
      </button>
      <button
        className="w-[25px] h-[25px]  rounded-sm hover:bg-black/10 transition-colors duration-200 active:scale-95 text-xl text-center"
        onClick={handelLessQuantity}
      >
        -
      </button>
    </>
  );
};
