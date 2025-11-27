import { create } from "zustand";

export const useStore = create<CounterStore>((set) => ({
  type: "All", // initial state

  setAll: () => set(() => ({ type: "All" })),
  setVegetables: () => set(() => ({ type: "Vegetables" })),
  setDesserts: () => set(() => ({ type: "Desserts" })),
  setDrinks: () => set(() => ({ type: "Drinks" })),
}));

export const useHeart = create<HeartStore>((set) => ({
  heart: [],
  toggleHeart: (id) =>
    set((state) => ({
      heart: state.heart.includes(id)
        ? state.heart.filter((item) => item !== id) // remove
        : [...state.heart, id], // add
    })),
}));

export const useCart = create<CartStore>((set) => ({
  cart: [],
  toggleCart: (id) =>
    set((state) => ({
      cart: state.cart.includes(id)
        ? state.cart.filter((item) => item !== id) // remove
        : [...state.cart, id], // add
    })),
}));
