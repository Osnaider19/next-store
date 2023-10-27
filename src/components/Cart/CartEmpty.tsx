import React from "react";

export const CartEmpty = () => {
  return (
    <div className="w-full h-full ">
      <div className="h-[50%] w-full mt-7 flex flex-col justify-center items-center">
        <img src="../../cart-empty.svg" alt="" className="w-full h-full" />
      </div>
      <p className="text-2xl font-semibold text-center py-2">Cart empty 😔</p>
    </div>
  );
};
