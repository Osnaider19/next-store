"use client";

import { category } from "@/data/category";
import { useProductsStore } from "@/store/productsStore";
import "./radio.css";
import { FilterPrice } from "./FilterPrice";
export const Filters = () => {
  const filterPrice = useProductsStore((state) => state.filters);
  const clearFilter = useProductsStore((state) => state.clearFilter);
  const getValueFromRadios = (name: string) => {
    const radios = document.querySelectorAll(
      `[name=${name}]`
    ) as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) return radios[i].value;
    }
    return null;
  };
  
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

  const handelClearFilters = () => {
    const radios = document.querySelectorAll(
      "[name=category]"
    ) as NodeListOf<HTMLInputElement>;
    const radiosPrice = document.querySelectorAll(
      "[name=price]"
    ) as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    for (let i = 0; i < radiosPrice.length; i++) {
      radiosPrice[i].checked = false;
    }
    clearFilter();
  };
  return (
    <div className="w-[250px] h-full min-h-screen absolute top-0 left-0 bg-[#F5F7FF] overflow-hidden py-5">
      <div className="relative w-full h-full px-4 py-3">
        <h3 className="py-2 text-center font-semibold">Filters</h3>
        <div className="w-full flex justify-center items-center pb-4 text-white ">
          <button
            className="py-2 px-4 border text-[#0156FF] border-[#0156FF]  hover:text-white rounded-3xl w-full hover:bg-[#0501ff] transition-colors duration-200"
            onClick={handelClearFilters}
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
                onClick={handelClick}
              />
            </div>
          ))}
        </div>
        <FilterPrice />
      </div>
    </div>
  );
};
