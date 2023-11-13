"use client";
import { Logo } from "./Logo";
import { Panel } from "./Panel";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="w-full h-[70px] bg-slate-50 sticky top-0 left-0 z-50 ">
      <div className="flex relative min-h-full  flex-grow  items-center ">
        <Logo />
        <Search/>
        <Panel />
      </div>
    </div>
  );
};
