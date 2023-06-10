import { useContext } from 'react';
import { CartContext } from 'context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to={'/cart'} className='relative'>
      <ShoppingCartIcon
        className={`h-[48px] px-3 ${cartItems.length && 'text-amazon-yellow'}`}
      />
      <span className='absolute top-[11px] right-[30px] text-[12px]'>
        {cartItems.length < 9 ? cartItems.length : '+9'}
      </span>
    </Link>
  );
};
