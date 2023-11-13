export const closeMenu = () => {
  const navbar = document.querySelector("#navbar") as HTMLElement;
  const dropMenu = document.querySelector(".dromenu") as HTMLElement;
  const inputCheck = document.querySelector("#checkbox") as HTMLInputElement;
  inputCheck.checked = false
  navbar.classList.toggle("-right-[1000px]");
  navbar.classList.toggle("-right-0");
  dropMenu.classList.toggle("hidden");
};
