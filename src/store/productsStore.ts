import { products } from "@/data/products";
import { type Products } from "@/types/types";
import { create } from "zustand";

type ProductStore = {
  products: Products[]; 
  searchResults: Products[]; // aqui se almacenan los resultados de la busqueda
  clearFilter: () => void; // limpiar los filtros 
  filters: (minprice: number, category: string) => void;
  search: (value: string) => void; // buscar por name o category
};
export const useProductsStore = create<ProductStore>((set, get) => ({
  products: products,
  searchResults: [],
  clearFilter: () => {
    set({ products: products });
  },

  filters: (minprice, category) => {

    //si el la category es true y el minprice es true filtramos por los dos
    if (category && minprice) {
      const productsFound = products.filter(
        (product) => product.price > minprice && category === product.category
      );
      set({ products: productsFound });
      return;
    }
    // si solo la category es true filtramos los productos por category
    if (category && !minprice) {
      const productsFound = products.filter(
        (product) => category === product.category
      );

      set({ products: productsFound });
      return;
    }
    // si solo el price es true filtramos por el price
    if (minprice && !category) {
      const productsFound = products.filter(
        (product) => product.price > minprice
      );
      set({ products: productsFound });
      return;
    }

  },

  search: (value) => {
    const valueToCase = value.toLocaleLowerCase() // transformamos el valor a buscar en minúsculas
    //iteramos  el arry de productos que cumplan con la condicion de el filtro
    const productsFound = products.filter((item) =>
      item.title.toLocaleLowerCase().includes(valueToCase) || item.category.toLocaleLowerCase().includes(valueToCase)
    );
    set({ searchResults: productsFound });
  },

}));
