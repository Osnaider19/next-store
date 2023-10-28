import { IconSearch } from "@/Icons/Icons";
import { Cart } from "../Cart/Cart";
import { ButtonCart } from "../Buttons/ButtonCart";
import { Profile } from "./Profile";

export const Panel = () => {
  return (
    <div className="relative flex gap-x-4 px-4 justify-center items-center">
      <button>
        <IconSearch />
      </button>
      <ButtonCart />
      <Profile />
      <Cart />
    </div>
  );
};
