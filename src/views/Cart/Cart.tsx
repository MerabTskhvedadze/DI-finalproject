import { useContext } from 'react';
import { CartContext } from 'context/CartContext';
import { CartItem } from './components/CartItem';

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h1 className='text-center text-2xl text-red-500'>Cart is empty</h1>;
  }

  return (
    <div className='flex flex-col gap-5'>
      {cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}
    </div>
  );
}
