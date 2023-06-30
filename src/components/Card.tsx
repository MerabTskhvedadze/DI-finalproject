import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from 'context/CartContext';
import { TProduct } from 'types/TProducts';
// import { Image } from 'antd';
import { Image } from './Image';

type CardProps = {
  data: TProduct;
};

export const Card = ({ data }: CardProps) => {
  const { t } = useTranslation('card');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data, 1);
  };

  return (
    <div className='relative bg-white z-30 m-3 p-3 select-none'>
      <Link
        className='text-lg xl:text-xl font-semibold ml-4 mt-4 hover:underline hover:text-blue-500'
        to={`/products/product/${data.id}`}
      >
        {data?.title.slice(0, 10)}...
      </Link>
      <div className='px-4 lg:py-2 text-xs italic text-gray-400'>
        {t('by')} <span>{data?.brand}</span>
      </div>
      <div className=' m-4 relative'>
        <Link
          to={`/products/product/${data.id}`}
          className=' bg-white z-30 m-3 select-none'
        >
          <Image src={data.images[0]} alt={data.title} />
        </Link>
        <ShoppingCartIcon
          onClick={handleAddToCart}
          className='h-[25px] lg:h-[30px] absolute z-50 right-[10px] -top-4 md:-top-3 bg-blue-300 rounded-[100%] p-1 cursor-pointer'
        />
      </div>
      <span className='absolute bottom-2 px-4 font-medium text-blue-500'>
        {data.price}$
      </span>
    </div>
  );
};
