import { create } from "zustand";
import type { CartItem } from "@/types/cart";

// Define the cart state interface
interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    const { items } = get();
    const existing = items.find((i) => i.productId === item.productId);

    const updatedItems = existing
      ? items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      : [...items, item];

    set({ items: updatedItems });

    // Optionally persist to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  },

  removeItem: (productId) => {
    const { items } = get();

    const updatedItems = items
      .map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    set({ items: updatedItems });

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  },

  clearCart: () => {
    set({ items: [] });
    localStorage.removeItem("cart");
  },
}));
