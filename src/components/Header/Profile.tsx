import { IconCart, IconSearch } from "@/Icons/Icons";
import { Cart } from "../Cart/Cart";
import { ButtonCart } from "../Buttons/ButtonCart";

export const Profile = () => {
  return (
    <div className="relative flex gap-x-4 px-4 justify-center items-center">
      <button>
        <IconSearch />
      </button>
      <ButtonCart />
      <div>
        <button className="w-[36px] h-[36px] rounded-full bg-red-400"></button>
      </div>
      <Cart />
      
    </div>
  );
};
