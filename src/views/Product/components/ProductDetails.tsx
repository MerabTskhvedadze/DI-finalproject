import { Rate } from 'antd';
import { useState } from 'react';

type ProductDetailsProps = {
  title: string;
  brand: string;
  rating: number;
  description: string;
  price: number;
};

export function ProductDetails({
  title,
  brand,
  rating,
  description,
  price,
}: ProductDetailsProps) {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <>
      <div className='mb-3'>
        <div className='text-xl xl:text-2xl font-medium mb-1'>{title}</div>
        <div className='text-sm xl:text-base mb-1'>
          by <span className='text-blue-500'>{brand}</span>
        </div>
        <div className='text-sm xl:text-base mb-1 text-blue-500'>
          <Rate disabled defaultValue={rating} /> rating
        </div>
        <div className='text-xl xl:text-2xl font-semibold text-red-500 py-1'>
          ${price}
        </div>
      </div>
      <div className='text-base xl:text-lg my-3 py-2'>
        {!showMore ? description.slice(0, 600) + '...' : description}
        <span
          className='cursor-pointer ml-2 text-sm italic text-gray-500'
          onClick={() => setShowMore((prev) => !prev)}
        >
          {!showMore ? 'more' : 'less'}
        </span>
      </div>
    </>
  );
}
