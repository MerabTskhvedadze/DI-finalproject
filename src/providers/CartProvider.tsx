import { CartContext, CartItem } from 'context/CartContext';
import { PropsWithChildren, useState } from 'react';

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const decreaseCartQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { id: itemId, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };
  const increaseCartQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId
          ? { id: itemId, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseCartQuantity,
        increaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
