import { products } from "@/data/products";
import { type Products } from "@/types/types";
import { create } from "zustand";

type ProductStore = {
  products: Products[];
  filters: (value: string) => void;
  clearFilter: () => void;
};
export const useProductsStore = create<ProductStore>((set, get) => ({
  products: products,
  filters: (value) => {
    const productFound = products.filter(
      (product) => value === product.category
    );
    console.log(productFound);
    productFound ? set({ products: productFound }) : set({ products: [] });
  },
  clearFilter: () => {
    set({ products: products });
  },
}));
