"use client";
import "./button-menu.css";
export const ButtonMenu = () => {
  const handelMenu = () => {
    const inputCheck = document.querySelector("#checkbox") as HTMLInputElement;
    const navbar = document.querySelector("#navbar") as HTMLElement;
    const dropMenu = document.querySelector(".dromenu") as HTMLElement;
    if (inputCheck.checked === false) {
      navbar.classList.toggle("-right-[1000px]");
      navbar.classList.toggle("-right-0");
      dropMenu.classList.toggle("hidden");
    }
  };
  return (
    <>
      <div className="relative">
        <div onClick={handelMenu}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>
      <div
        className="fixed hidden w-full h-screen left-0 top-[70px] -z-[1] bg-black/30 dromenu"
        onClick={handelMenu}
      ></div>
    </>
  );
};
