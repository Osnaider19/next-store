import { create } from "zustand";
import { products } from "../data/products";
import { type Products } from "@/types/types";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
interface CartStore {
  cart: Products[];
  addToCart: (id: number) => void; // agregar productos al cart
  removeFromCart: (id: number) => void; // remover un producto de el cart
  clearCart: () => void; // limpiar el cart
  removeOneFromCart: (id: number) => void; // remover la cantidad de el producto
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({

        cart: [], //estado inicial de el cart

        addToCart: (id: number) => {
          const newProduct = products.find((product) => id === product.id); // buscamos en el arry de producto el que por id
          const productInCart = get().cart.find((product) => id === product.id); // si el producto ya esta en el cart

          //si el producto ya esta en el cart lo que vamos hacer es que a su propiedad amount le vamos a sumar lo que tenga la propiedad amount mas 1
          if (productInCart) {
            const updatedCart = get().cart.map((product) =>
              product.id === id
                ? { ...product, amount: product.amount! + 1 }
                : product
            );
            set({ cart: updatedCart });
            return; // retornamos para que no siga buscando
          }
          // si el producto no esta en el cart lo agregamos 
          if (newProduct) {
            const product = { ...newProduct, amount: 1 }; // mutamos el producto para que le agrege un propiedad amout que seria la cantidad

            set((state) => ({ // actualizamos el estado con todo lo que tenga el estado mas el nuevo producto
              ...state,
              cart: [...state.cart, product],
            }));
            return;
          }
        },

        removeFromCart: (id: number) => {
          // buscamos entre todos los productos de el cart y filtarmos todos aquellos productos que se sean distintos con el id de el producto que fue enviado 
          set((state) => ({
            ...state,
            cart: state.cart.filter((product) => product.id !== id),
          }));
        },

        removeOneFromCart: (id: number) => {
          // buscamos el producto a remover cantidad
          const productToRemove = get().cart.find(
            (product) => id === product.id
          );
          // si encuentra el producto hacemos un map de todos los productos de el  cart y si el id es igual al id de el producto que se esta recoriendo en ese momento a su propiedad amount le vamos a restar 1 
          if (productToRemove) {
            const updatedCart = get().cart.map((product) => {
              if (product.id === id) {
                return { ...product, amount: product.amount! - 1 };
              }
              return product;
            });
           
            // actualizamos el estado con los productos actualizado mientras que en su propiedad amount de el producto se mayor a 0 
            set((state) => ({
              ...state,
              cart: updatedCart.filter((product) => product.amount! > 0),
            }));
          }

        },
          
        clearCart: () => {
          // limpiar  el cart a su estado inicial
          set({ cart: [] });
        },

      }),

      {
        name: "cart",
        storage: createJSONStorage(() => localStorage), // guardar el estado en el localStorage
      }
    )
  )
);
