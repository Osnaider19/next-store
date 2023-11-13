import { Filters } from "../Filters/Filters";
import { ItemNav } from "./ItemNav";

export const Nav = () => {
  return (
    <>
      <ul
        className="absolute shadow-2xl bg-[#F5F7FF] lg:bg-transparent h-screen py-8 px-6 -right-[1000px] top-[70px] items-center gap-x-3 w-full flex-grow lg:flex  lg:relative lg:top-0 lg:h-full lg:right-0 lg:py-0 transition-all duration-300 z-30 overflow-auto pb-60"
        id="navbar"
      >
        <ItemNav link="#" name="Laptops" />
        <ItemNav link="#" name="Desktop PCs" />
        <ItemNav link="#" name="Networking Devices" />
        <ItemNav link="#" name="Printers & Scanners" />
        <ItemNav link="#" name="PC Parts" />
        <div className="relative w-full lg:hidden h-screen">
          <Filters />
        </div>
      </ul>
    </>
  );
};
