import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  img: string;
  id: number;
  price: number;
};

export const Card = ({ title, img, id, price }: CardProps) => {
  return (
    <div className='h-[420px] bg-white z-30 m-3 '>
      <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
        {title.slice(0, 25)}...
      </div>
      <div className='h-[300px] m-4 relative'>
        <img src={img} className='h-full w-full object-cover' />
        <ShoppingCartIcon
          onClick={() => console.log(id)}
          className='h-[40px] lg:h-[30px] absolute right-[10px] -top-4 md:-top-3 bg-blue-300 rounded-[100%] p-1 cursor-pointer'
        />
      </div>
      <div className='flex items-center justify-between px-4'>
        <Link
          to={`/product/${id}`}
          className='text-xs xl:text-sm text-blue-400 underline '
        >
          More details
        </Link>
        <span className='italic font-mono'>{price}$</span>
      </div>
    </div>
  );
};
