import React, { useContext, useMemo } from 'react';
import { CartContext } from 'context/CartContext';
import { CartItem } from './components/CartItem';
import { Button } from 'components/Button';

function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <h1 className='text-center text-3xl text-red-500 italic mt-[30%]'>
        Cart is empty!
      </h1>
    );
  }

  return (
    <div className='bg-white'>
      <div className='text-2xl xl:text-3xl m-4'>Shopping Cart</div>
      {cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}
      <div className='mx-10 flex flex-col gap-5 items-center py-5 font-medium border-t border-gray-100'>
        <p>
          Total price: <span className='text-blue-500 ml-1'>${totalPrice}</span>
        </p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default React.memo(Cart);
