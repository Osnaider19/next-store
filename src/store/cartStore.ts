import { create } from "zustand";
import { products } from "../data/products";
interface CartItem {
  id: number;
  title: string;
  price: number;
  images: Image[];
  amount?: number | undefined;
  ranting: number;
}
interface Image {
  url: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  removeOneFromCart: (id: number) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (id: number) => {
    const newProduct = products.find((product) => id === product.id);
    const productInCart = get().cart.find((product) => id === product.id);

    if (productInCart) {
      const updatedCart = get().cart.map((product) =>
        product.id === id
          ? { ...product, amount: product.amount! + 1 }
          : product
      );
      set({ cart: updatedCart });
    } else {
      if (newProduct) {
        const product = { ...newProduct, amount: 1 };
        set((state) => ({
          ...state,
          cart: [...state.cart, product],
        }));
      }
    }
  },

  removeFromCart: (id: number) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== id),
    }));
  },
  removeOneFromCart: (id: number) => {
    const productToRemove = get().cart.find((product) => id === product.id);
    if (productToRemove) {
      const updatedCart = get().cart.map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount! - 1 };
        }
        return product;
      });

      set((state) => ({
        ...state,
        cart: updatedCart.filter((product) => product.amount! > 0),
      }));
    }
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));
