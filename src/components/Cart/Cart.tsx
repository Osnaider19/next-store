"use client";
import { useCartStore } from "@/store/cartStore";
import { ItemCart } from "./ItemCart";
import "./cart.css";
import { CartEmpty } from "./CartEmpty";
import dynamic from "next/dynamic";
const Total = dynamic(() => import("@/components/Cart/Total"), {
  ssr: false,
});
export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  return (
    <div
      className="w-[350px] h-[511px] absolute -right-7 top-12 bg-slate-50  
    shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] border opacity-0 pointer-events-none translate-y-1 transition-all duration-300 z-30"
      id="content_cart"
    >
      <div className="relative h-full w-full py-3">
        <div className="absolute z-[2] right-8 -top-7 w-0 h-0 border-solid border-[14px]  border-b-slate-50  border-l-transparent border-r-transparent border-t-transparent  "></div>
        <div className="w-full h-full flex flex-col  items-center">
          <span className="text-2xl font-semibold ">My cart </span>
          <span className="text-sm text-black/50 py-2 font-semibold">
            {cart.length} items in cart
          </span>
          {cart.length > 0 ? (
            <div
              className="w-full pb-[150px] overflow-hidden overflow-y-auto "
              id="content_item_cart"
            >
              {cart.map((item) => (
                <ItemCart
                  key={item.id}
                  id={item.id}
                  imagen={item.images[0].url}
                  price={item.price}
                  title={item.title}
                  amount={item.amount}
                />
              ))}
            </div>
          ) : (
            <CartEmpty />
          )}
          <Total />
        </div>
      </div>
    </div>
  );
}
