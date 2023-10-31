import { products } from "@/data/products";
import { Products } from "./Products";

type Props = {
  category: string;
};
export const CatalogProducts = ({ category }: Props) => {
 
  const filterProducts = products.filter((item) => category === item.category);
  return <Products products={filterProducts} />;
};
