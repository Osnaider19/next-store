import { type Products } from "@/types/types";
import { PayPalButtons } from "@paypal/react-paypal-js";

export const ButtonPayPal = ({
  cart,
  total,
}: {
  cart: Products[];
  total: number;
}) => {
  const handelCheckout = async () => {
    const dataOrder = {
      cart,
      total,
    };
    const res = await fetch("api/checkout", {
      method: "POST",
      body: JSON.stringify(dataOrder),
      headers: {
        "content-type": "application/json",
      },
    });
    const order = await res.json();
    return order.id;
  };
  return (
    <PayPalButtons
      className="w-full px-3"
      style={{
        color: "blue",
        label: "checkout",
        layout: "horizontal",
      }}
      createOrder={handelCheckout}
      onApprove={async (data, actions) => {
        actions.order?.capture();
      }}
      onCancel={(data) => {
        console.log("was canceled in payment", data);
      }}
    />

    // <button
    //   onClick={async () => {
    //     const dataOrder = {
    //       cart,
    //       total,
    //     };
    //     const res = await fetch("api/checkout", {
    //       method: "POST",
    //       body: JSON.stringify(dataOrder),
    //     });
    //     const order = await res.json();
    //     return order.id;
    //   }}
    // >
    //   PayPal
    // </button>
  );
};
