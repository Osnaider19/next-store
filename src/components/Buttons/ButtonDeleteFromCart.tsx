"use client"
import { IconDelete } from "@/Icons/Icons";
import { useCartStore } from "@/store/cartStore";


export const ButtonDeleteFromCart = ({ id }: { id: number }) => {
  const deleteFromCart = useCartStore((state) => state.removeFromCart);
  const handelClick = () => {
    deleteFromCart(id);
  };
  return (
    <button className="pb-2 hover:text-red-400 transition-colors duration-200" onClick={handelClick}>
       <IconDelete />
    </button>
  );
};
