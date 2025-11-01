import { create } from "zustand";

// Define cart item interface
interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  attributes?: Record<string, string>; // For things like size, color, etc.
}

// Define cart store interface
interface CartState {
  items: CartItem[];

  // Actions
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  // Derived data
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItem: (id: string) => CartItem | undefined;
}

// Helper function to load cart from localStorage in SSR environment
const loadCartFromStorage = (): { items: CartItem[] } => {
  if (typeof window === "undefined") return { items: [] };

  try {
    const cartData = localStorage.getItem("cart-data");
    if (cartData) {
      return JSON.parse(cartData);
    }
  } catch (error) {
    console.error("Error loading cart data from storage:", error);
  }

  return { items: [] };
};

// Helper function to save cart to localStorage
const saveCartToStorage = (items: CartItem[]): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("cart-data", JSON.stringify({ items }));
  } catch (error) {
    console.error("Error saving cart data to storage:", error);
  }
};

// Initialize with data from localStorage if available
const initialState = loadCartFromStorage();

// Create the cart store
export const useCartStore = create<CartState>()((set, get) => ({
  // Initialize from localStorage or default to empty array
  items: initialState.items || [],

  // Add item to cart
  addItem: (item, quantity = 1) => {
    const { items } = get();
    const existingItemIndex = items.findIndex((i) => i.id === item.id);

    let newItems: CartItem[];

    if (existingItemIndex > -1) {
      // If item exists, update quantity
      newItems = items.map((cartItem, i) =>
        i === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
    } else {
      // If item doesn't exist, add it
      newItems = [...items, { ...item, quantity }];
    }

    set({ items: newItems });
    saveCartToStorage(newItems);
  },

  // Remove item from cart
  removeItem: (id) => {
    const newItems = get().items.filter((item) => item.id !== id);
    set({ items: newItems });
    saveCartToStorage(newItems);
  },

  // Update quantity of an item
  updateQuantity: (id, quantity) => {
    const newItems = get().items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    set({ items: newItems });
    saveCartToStorage(newItems);
  },

  // Clear the cart
  clearCart: () => {
    set({ items: [] });
    saveCartToStorage([]);
  },

  // Get total number of items in the cart
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  // Get total price of all items in the cart
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  // Get a specific item from the cart
  getItem: (id) => {
    return get().items.find((item) => item.id === id);
  },
}));
