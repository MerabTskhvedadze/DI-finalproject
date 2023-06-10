import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from 'context/CartContext';

type CardProps = {
  title: string;
  img: string;
  id: number;
  price: number;
};

export const Card = ({ title, img, id, price }: CardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='h-[420px] bg-white z-30 m-3 select-none'>
      <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
        {title.slice(0, 25)}...
      </div>
      <div className='h-[300px]  m-4 relative'>
        <img src={img} className='h-full w-full object-cover' />
        <ShoppingCartIcon
          onClick={() => addToCart({ id, quantity: 0, price })}
          className='h-[40px] lg:h-[30px] absolute right-[10px] -top-4 md:-top-3 bg-blue-300 rounded-[100%] p-1 cursor-pointer'
        />
      </div>
      <div className='flex items-center justify-between px-4'>
        <Link
          to={`/products/product/${id}`}
          className='text-xs xl:text-sm text-blue-400 underline '
        >
          More details
        </Link>
        <span className='italic font-mono'>{price}$</span>
      </div>
    </div>
  );
};
