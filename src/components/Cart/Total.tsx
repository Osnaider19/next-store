"use client"
import { useCartStore } from "@/store/cartStore";

export const Total = () => {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((accumulator, item) => {
    
    return accumulator += item.price * (item.amount || 1);
  }, 0);
  return (
    <div className="absolute bottom-0 left-0 h-[130px] w-full border-t border bg-white">
      <div className="relative w-full h-full flex flex-col justify-center items-center py-1">
        <div className="py-2">
          <span className="font-semibold">Total : ${total}</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 w-full px-8">
          <button className="bg-[#0156FF] text-white py-1 px-4 rounded-3xl w-full hover:opacity-90">
            Go to Checkout
          </button>
          <button className="bg-yellow-300 py-1 px-4 rounded-3xl w-full hover:opacity-90">
            Go to Checkout <span className="italic font-semibold">PayPal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
