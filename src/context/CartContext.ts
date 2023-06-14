import { createContext, useContext } from 'react';
import { TProduct } from 'types/TProducts';

export type CartItem = {
  product: TProduct;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};

type CartContextType = {
  cart: Cart;
  addToCart: (product: TProduct, quantity?: number) => void;
  removeCartItem: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
