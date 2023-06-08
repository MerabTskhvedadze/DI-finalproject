import { createContext } from 'react';

export type CartItem = {
  id: number;
  quantity: number;
};

type CartContextValues = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  decreaseCartQuantity: (id: number) => void;
  increaseCartQuantity: (id: number) => void;
};

export const CartContext = createContext<CartContextValues>({
  cartItems: [],
  addToCart: () => {},
  decreaseCartQuantity: () => {},
  increaseCartQuantity: () => {},
});
