import { useState } from "react";
import { Nav } from "./Nav";
import { ButtonSearch } from "./ButtonSearch";
import { ResultsSearch } from "../Results/ResultsSearch";
import { useProductsStore } from "@/store/productsStore";

export const Search = () => {
  const [search, setSearch] = useState(false); //render
  const [inpurSearch, setInputSearch] = useState(""); //input 
  const Fsearch = useProductsStore((state) => state.search)
  const handelChange = () => {
    const input = document.querySelector(".input_search") as HTMLInputElement
    setInputSearch(input.value)
    Fsearch(input.value)
  }
  return (
    <>
      {search ? (
        <div className="flex items-center flex-grow px-3">
          <div className="w-full h-full ">
            <input
              type="text"
              className="h-[40px] w-full px-4 outline-none bg-[#f5f7fffa] rounded-3xl input_search"
              placeholder="Search"
              value={inpurSearch}
              onChange={handelChange}
            />
          </div>
          {inpurSearch.length > 1 && <ResultsSearch/>}
        </div>
      ) : (
        <Nav />
      )}
      <ButtonSearch setSearch={setSearch} search={search}/> 
    </>
  );
};
