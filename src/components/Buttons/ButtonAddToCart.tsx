"use client";
import { IconCart } from "@/Icons/Icons";
import { useCartStore } from "@/store/cartStore";

export const ButtonAddToCart = ({ id }: { id: number }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handelClick = () => {
    addToCart(id);
  };
  return (
    <div className="flex justify-center items-center">
      <button
        className="text-[#0156FF] flex border-[#0156FF] border px-5 py-2 justify-center items-center rounded-3xl"
        onClick={handelClick}
      >
        <span className="block">
          <IconCart />
        </span>
        <span className="font-semibold">Add to cart</span>
      </button>
    </div>
  );
};
