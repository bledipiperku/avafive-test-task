import { create } from "zustand";

import { TProduct } from "@/lib/types/product";

type TCartStore = {
  products: TProduct[];
  addToCart: (item: any) => void;
  removeFromCart: (item: any) => void;
};

export const useCart = create<TCartStore>()((set) => ({
  products: [],

  addToCart: (item) =>
    set((state) =>
      !state.products.includes(item)
        ? { products: [...state.products, item] }
        : { products: state.products }
    ),

  removeFromCart: (item) =>
    set((state) => ({
      products: state.products.filter((product) => product !== item),
    })),
}));
