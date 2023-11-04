"use client";
import { useProductsStore } from "@/store/productsStore";
import { CardSearch } from "../Card/CardSearch";
import "./result.css";
import { NoResults } from "./NoResults";
export const ResultsSearch = () => {
  const results = useProductsStore((state) => state.searchResults);
  return (
    <div className="absolute left-0 top-[65px] py-1 w-full h-screen bg-black/20 overflow-auto">
      <div className="w-[50%] relative  min-h-[80vh]  bg-[#f5f7fffa] shadow-2xl mx-auto rounded-md  px-2 py-2 overflow-auto  container__result__search">
        <div className="absolute left-0 w-full top-0 min-h-full overflow-auto rounded-md pb-16 py-5 gap-y-4 px-2 ">
          {results.map(({ id, images, price, title }) => (
            <CardSearch
              key={id}
              id={id}
              img={images[0].url}
              price={price}
              title={title}
            />
          ))}
          {results.length === 0 && <NoResults />}
        </div>
      </div>
    </div>
  );
};
