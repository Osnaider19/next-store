import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Panel } from "./Panel";
export const Header = () => {
  return (
    <div className="w-full h-[70px] bg-slate-50 sticky top-0 left-0 z-50">
      <div className="flex  items-center">
        <Logo />
        <Nav />
        <Panel/> 
      </div>
    </div>
  );
};
