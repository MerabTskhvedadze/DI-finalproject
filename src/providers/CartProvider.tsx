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

  const decreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? {
              id: itemId,
              price: cartItem.price,
              quantity: cartItem.quantity - 1,
            }
          : cartItem
      )
    );
  };
  const increaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId
          ? {
              id: itemId,
              price: cartItem.price,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    );
  };

  const deleteItem = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
