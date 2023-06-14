import { PropsWithChildren, useState } from 'react';
import { Cart, CartContext } from 'context/CartContext';
import { TProduct } from 'types/TProducts';

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart>({ items: [] });

  const addToCart = (product: TProduct, quantity = 1): void => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.product.id === product.id
      );

      //if item already exists increase its quantity otherwise add new item into cart
      if (existingItem) {
        const updatedItems = prevCart.items.map((item) => {
          if (item === existingItem) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });
        return { ...prevCart, items: updatedItems };
      } else {
        const newItem = {
          product,
          quantity,
        };
        const updatedItems = [...prevCart.items, newItem];
        return { ...prevCart, items: updatedItems };
      }
    });
  };

  const removeCartItem = (productId: number): void => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter(
        (item) => item.product.id !== productId
      );
      return { ...prevCart, items: updatedItems };
    });
  };

  const increaseQuantity = (productId: number, amount: number = 1): void => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity + amount,
          };
        }
        return item;
      });

      return { ...prevCart, items: updatedItems };
    });
  };
  const decreaseQuantity = (productId: number, amount: number = 1): void => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => {
        if (item.product.id === productId && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - amount,
          };
        }
        return item;
      });

      return { ...prevCart, items: updatedItems };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCartItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
