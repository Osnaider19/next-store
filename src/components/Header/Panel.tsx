import { Profile } from "./Profile";
import dynamic from "next/dynamic";

const Cart = dynamic(() => import("@/components/Cart/Cart"), { ssr: false });
const ButtonCart = dynamic(() => import("@/components/Buttons/ButtonCart"), {
  ssr: false,
});

export const Panel = () => {
  return (
    <div className="relative flex gap-x-4 px-4 justify-center items-center">
      <div className="relative flex justify-center items-center ">
        <ButtonCart />
        <Cart />
      </div>
      <Profile />
    </div>
  );
};
