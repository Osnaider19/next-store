"use client";
import { IconCart } from "@/Icons/Icons";
import { useCartStore } from "@/store/cartStore";

export const ButtonCart = () => {
  const cart = useCartStore((state) => state.cart)
  const handelClick = () => {
    const Cart = document.querySelector("#content_cart") as HTMLElement;
    const backdrop = document.querySelector("#backdrop") as HTMLElement;
    Cart.classList.toggle(`opacity-0`);
    Cart.classList.toggle(`pointer-events-none`);
    Cart.classList.toggle(`translate-y-1`);
    backdrop.classList.toggle("hidden");
  };

  return (
    <>
      <button className="relative" onClick={handelClick}>
        <IconCart />
        {cart.length >= 1 && <span className="absolute -right-1 -top-1 bg-[#0156FF] w-[15px] h-[15px] text-white rounded-full text-[10px] text-center ">{cart.length}</span>}
      </button>
      <div
        className="fixed top-[69px] left-0 bg-black/30 w-full h-full hidden z-10"
        id="backdrop"
        onClick={handelClick}
      ></div>
    </>
  );
};
