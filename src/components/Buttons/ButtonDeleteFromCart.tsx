import { IconDelete } from "@/Icons/Icons";
import { useCartStore } from "@/store/cartStore";
import React from "react";

export const ButtonDeleteFromCart = ({ id }: { id: number }) => {
  const deleteFromCart = useCartStore((state) => state.removeFromCart);
  const handelClick = () => {
    deleteFromCart(id);
  };
  return (
    <button className="pb-2" onClick={handelClick}>
      <IconDelete />
    </button>
  );
};
