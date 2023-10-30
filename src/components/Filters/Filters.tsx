"use client";

import { category } from "@/data/category";
import { useProductsStore } from "@/store/productsStore";
import "./radio.css";
export const Filters = () => {
  const filters = useProductsStore((state) => state.filters);
  const clearFilter = useProductsStore((state) => state.clearFilter);
  const handelRadio = () => {
    const radios = document.querySelectorAll(
      "[name=category]"
    ) as NodeListOf<HTMLInputElement>;
    let valorSeleccionado = "";

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        valorSeleccionado = radios[i].value;

        break;
      }
    }
    filters(valorSeleccionado);
  };
  return (
    <div className="w-[220px] h-screen absolute top-0 left-0 bg-[#F5F7FF] rounded-md overflow-hidden py-5">
      <div className="relative w-full h-full px-4 py-3">
        <h3 className="py-2 text-center font-semibold">Filters</h3>
        <div className="w-full flex justify-center items-center pb-2 text-white ">
          <button
            className="py-2 px-4 border border-[#A2A6B0] text-[#A2A6B0] rounded-3xl w-full"
            onClick={clearFilter}
          >
            Clear filters
          </button>
        </div>
        <div className="w-full">
          <h3 className="font-semibold tracking-wide py-1">Category</h3>
          {category.map((item, index) => (
            <div className="w-full flex gap-3 form" key={index}>
              <label
                htmlFor={item.category}
                className="cursor-pointer block w-full py-1 capitalize hover:text-[#0156FF]"
              >
                {item.category}
              </label>
              <input
                id={item.category}
                type="radio"
                name="category"
                value={item.category}
                onClick={handelRadio}
              />

              {/* <label className="cursor-pointer block w-full py-1 capitalize hover:text-[#0156FF]">
                <input
                  type="radio"
                  name="category"
                  value={item.category}
                  className="px-4 mr-2"
                  onClick={handelRadio}
                />
                {item.category}
              </label> */}
            </div>
          ))}
        </div>
        <div className="py-3">
          <h4 className="font-semibold">Price</h4>
        </div>
      </div>
    </div>
  );
};
