"use client";
import { IconCart } from "@/Icons/Icons";
import { useCartStore } from "@/store/cartStore";

export const ButtonAddToCart = ({ id }: { id: number }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handelClick = () => {
    addToCart(id);
    const Cart = document.querySelector("#content_cart") as HTMLElement;
    const backdrop = document.querySelector("#backdrop") as HTMLElement;
    Cart.classList.toggle(`opacity-0`);
    Cart.classList.toggle(`pointer-events-none`);
    Cart.classList.toggle(`translate-y-1`);
    backdrop.classList.toggle("hidden");
  };
  return (
    
      <button
        className="text-[#0156FF] flex border-[#0156FF] border px-5 py-2 justify-center items-center rounded-3xl"
        onClick={handelClick}
      >
        <span className="block">
          <IconCart />
        </span>
        <span className="font-semibold">Add to cart</span>
      </button>
    
  );
};
