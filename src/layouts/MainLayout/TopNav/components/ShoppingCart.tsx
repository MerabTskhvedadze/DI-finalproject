import { useCart } from 'context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ShoppingCart = () => {
  const { cart } = useCart();

  return (
    <Link to={'/cart'} className='relative'>
      <ShoppingCartIcon
        className={`h-[48px] px-3 ${cart.items.length && 'text-amazon-yellow'}`}
      />
      <span className='absolute top-[11px] right-[30px] text-[12px]'>
        {cart.items.length < 9 ? cart.items.length : '+9'}
      </span>
    </Link>
  );
};
