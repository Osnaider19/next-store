"use client";
import { pPaypalClientId } from "@/config/config";
import { useCartStore } from "@/store/cartStore";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ButtonPayPal } from "../Buttons/ButtonPayPal";

export const Total = () => {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((accumulator, item) => {
    return (accumulator += item.price * (item.amount || 1));
  }, 0);

  return (
    <PayPalScriptProvider
      options={{
        clientId: `${pPaypalClientId}`,
      }}
    >
      <div className="absolute bottom-0 left-0 h-[130px] w-full border-t border bg-white">
        <div className="relative w-full h-full flex flex-col justify-center items-center py-1">
          <div className="py-2">
            <span className="font-semibold">Total : ${total}</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 w-full ">
            <ButtonPayPal cart={cart} total={total}/>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};
