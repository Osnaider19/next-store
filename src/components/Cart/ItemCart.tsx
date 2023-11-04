import { ButtonsQuantity } from "../Buttons/ButtonsQuantity";
import { ButtonDeleteFromCart } from "../Buttons/ButtonDeleteFromCart";

type Props = {
  id: number;
  imagen: string;
  title: string;
  price: number;
  amount?: number;
};
export const ItemCart = ({ id, imagen, title, price, amount }: Props) => {
  return (
    <div className="w-full flex justify-start items-center  border-y py-2">
      <div className=" flex justify-center items-center">
        <div className="px-1  h-[28px] w-[32px]">
          <span className="text-lg">
            X<span className="text-sm ">{amount}</span>
          </span>
        </div>
        <div className="w-20 h-20">
          <img src={imagen} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-[9.5rem] h-full  px-1 flex-grow ">
        <p className="line-clamp-3 leading-4 text-sm ">{title}</p>
        <p className="font-semibold pt-1">${price}</p>
      </div>
      <div className="w-[40px] h-full  flex flex-col items-center justify-between py-1">
        <ButtonDeleteFromCart id={id} />
        <div className="flex flex-col gap-y-1">
          <ButtonsQuantity id={id} />
        </div>
      </div>
    </div>
  );
};
