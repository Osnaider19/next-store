import { ItemNav } from "./ItemNav";

export const Nav = () => {
  return (
    <ul className="flex items-center gap-x-3  flex-grow">
      <ItemNav link="#" name="Laptops"/>
      <ItemNav link="#" name="Desktop PCs"/>
      <ItemNav link="#" name="Networking Devices"/>
      <ItemNav link="#" name="Printers & Scanners"/>
      <ItemNav link="#" name="PC Parts"/>
    </ul>
  );
};
