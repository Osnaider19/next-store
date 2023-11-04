"use client";
import { pPaypalClientId } from "@/config/config";
import { useCartStore } from "@/store/cartStore";
import { useSession } from "@clerk/nextjs";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

export default function Total() {
  const user = useSession();
  const router = useRouter()
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((accumulator, item) => {
    return (accumulator += item.price * (item.amount || 1));
  }, 0);

  async function handelCheckout() {
    if (user.session) {
      const res = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          cart,
          total,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const order = await res.json();
      return order.id;
    }
    alert("sign in primary");
    router.push("/sign-in");
    
  }
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
            {cart.length > 0 && (
              <PayPalButtons
                forceReRender={[cart]}
                className="w-full px-3"
                style={{
                  color: "blue",
                  label: "checkout",
                  layout: "horizontal",
                }}
                createOrder={handelCheckout}
                onApprove={async (data, actions) => {
                  actions.order?.capture();
                  console.log("se capturo la compra", data);
                }}
                onCancel={(data) => {
                  console.log("was canceled in payment", data);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
