import { useState } from "react";
import { Nav } from "./Nav";
import { ButtonSearch } from "./ButtonSearch";

export const Search = () => {
  const [search, setSearch] = useState(true);
  return (
    <>
      {search ? (
        <div className="flex items-center flex-grow px-3">
          <div className="w-full h-full ">
            <input
              type="text"
              className="h-[40px] w-full px-4 outline-none bg-[#f5f7fffa] rounded-3xl"
              placeholder="Search "
            />
          </div>
        </div>
      ) : (
        <Nav />
      )}
      <ButtonSearch setSearch={setSearch} search={search}/> 
    </>
  );
};
