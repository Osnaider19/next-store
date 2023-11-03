"use client";
import { price } from "@/data/price";
import { useProductsStore } from "@/store/productsStore";

export const FilterPrice = () => {
  const getValueFromRadios = (name: string) => {
    const radios = document.querySelectorAll(
      `[name=${name}]`
    ) as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
    return null;
  };

  const filterPrice = useProductsStore((state) => state.filters);

  const handelClick = () => {
    const minPrice = parseInt(getValueFromRadios("price")!);
    const category = getValueFromRadios("category");
    document.documentElement.scrollTo( {
      top: 337,
      behavior: 'smooth'
    })
    if (minPrice && category) {
      filterPrice(minPrice, category);
      return;
    }
    if (minPrice && !category) {
      filterPrice(minPrice, "");
      return;
    }
    if (category && !minPrice) {
      filterPrice(0, category);
      return;
    }
  };

  return (
    <div className="py-3">
      <h4 className="font-semibold py-2">Price</h4>
      {price.map(({ id, maxprice, minprice }) => (
        <div className="w-full flex gap-3 form" key={id}>
          <label
            htmlFor={id.toString()}
            className="cursor-pointer block w-full py-2 capitalize hover:text-[#0156FF]"
          >
            ${minprice} {">"} ∞
          </label>
          <input
            id={id.toString()}
            type="radio"
            name="price"
            value={minprice}
            onClick={handelClick}
          />
        </div>
      ))}
    </div>
  );
};
