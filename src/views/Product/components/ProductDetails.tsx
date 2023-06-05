import { Rate } from 'antd';

type ProductDetailsProps = {
  title: string;
  brand: string;
  rating: number;
  description: string;
};

export function ProductDetails({
  title,
  brand,
  rating,
  description,
}: ProductDetailsProps) {
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
      </div>
      <div className='text-base xl:text-lg mt-3'>{description}</div>
    </>
  );
}
