import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useCart } from 'context/CartContext';
import { TProduct } from 'types/TProducts';

type CardProps = {
  data: TProduct;
};

export const Card = ({ data }: CardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data, 1);
  };

  return (
    <div className='h-[440px] bg-white z-30 m-3 p-3 select-none'>
      <Link
        className='text-lg xl:text-xl font-semibold ml-4 mt-4 hover:underline hover:text-blue-500'
        to={`/products/product/${data.id}`}
      >
        {data?.title.slice(0, 10)}...
      </Link>
      <div className='px-4 lg:py-2 text-xs italic text-gray-400'>
        By <span>{data?.brand}</span>
      </div>
      <div className='h-[300px] m-4 relative'>
        <Link
          to={`/products/product/${data.id}`}
          className='h-[440px] bg-white z-30 m-3 select-none'
        >
          <img
            src={data.images[0]}
            className='h-full w-full object-cover'
            alt={data.title}
          />
        </Link>
        <ShoppingCartIcon
          onClick={handleAddToCart}
          className='h-[25px] lg:h-[30px] absolute z-50 right-[10px] -top-4 md:-top-3 bg-blue-300 rounded-[100%] p-1 cursor-pointer'
        />
      </div>
      <span className='px-4 italic font-mono'>{data.price}$</span>
    </div>
  );
};
