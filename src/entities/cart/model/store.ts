import { create } from 'zustand';
import { Product } from '@/entities/product/model';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if item already exists
        const updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
        return { items: updatedItems };
      } else {
        // Add new item with quantity 1
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        // Remove item if quantity is zero or less
        return {
          items: state.items.filter((item) => item.id !== productId),
        };
      } else {
        // Update quantity for the specific item
        return {
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: quantity } : item,
          ),
        };
      }
    }),

  clearCart: () => set({ items: [] }),
}));
