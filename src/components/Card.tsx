import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from 'context/CartContext';
import { TProduct } from 'types/TProducts';

type CardProps = {
  data: TProduct;
};

export const Card = ({ data }: CardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='h-[440px] bg-white z-30 m-3 select-none'>
      <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
        {data?.title.slice(0, 25)}...
      </div>
      <div className='px-4 py-2 text-xs italic text-gray-400'>
        By <span>{data?.brand}</span>
      </div>
      <div className='h-[300px]  m-4 relative'>
        <img src={data.images[0]} className='h-full w-full object-cover' />
        <ShoppingCartIcon
          // onClick={() => addToCart()}
          className='h-[40px] lg:h-[30px] absolute right-[10px] -top-4 md:-top-3 bg-blue-300 rounded-[100%] p-1 cursor-pointer'
        />
      </div>
      <div className='flex items-center justify-between px-4'>
        <Link
          to={`/products/product/${data.id}`}
          className='text-xs xl:text-sm text-blue-400 underline '
        >
          More details
        </Link>
        <span className='italic font-mono'>{data.price}$</span>
      </div>
    </div>
  );
};
