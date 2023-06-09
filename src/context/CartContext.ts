import { createContext } from 'react';

export type CartItem = {
  id: number;
  quantity: number;
};

type CartContextValues = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
  deleteItem: (id: number) => void;
};

export const CartContext = createContext<CartContextValues>({
  cartItems: [],
  addToCart: () => {},
  decreaseQuantity: () => {},
  increaseQuantity: () => {},
  deleteItem: () => {},
});
