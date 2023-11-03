import { products } from "@/data/products";
import { type Products } from "@/types/types";
import { create } from "zustand";

type ProductStore = {
  products: Products[];
  clearFilter: () => void;
  filters: (minprice: number  , category: string) => void;
};
export const useProductsStore = create<ProductStore>((set, get) => ({
  products: products,
  

  clearFilter: () => {
    set({ products: products });
  },

  filters: (minprice, category) => {
    if (category && minprice) {
      const productsFound = products.filter(
        (product) => product.price > minprice && category === product.category
      );
      set({ products: productsFound });
      return
    } 
    if (category && !minprice) {
      const productsFound = products.filter(
        (product) => category === product.category
      );
      
      set({ products: productsFound });
      return
    }
    if (minprice && !category) {
      const productsFound = products.filter(
        (product) => product.price > minprice
      );
      set({ products: productsFound });
      return
    }
  },
}));
