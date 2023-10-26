import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Profile } from "./Profile";
export const Header = () => {
  return (
    <div className="w-full h-[70px] bg-slate-50 sticky top-0 left-0 z-50">
      <div className="flex  items-center">
        <Logo />
        <Nav />
        <Profile/> 
      </div>
    </div>
  );
};
