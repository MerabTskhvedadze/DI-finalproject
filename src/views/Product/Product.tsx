import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Rate } from 'antd';
import { Button } from 'components/Button';

export default function Product() {
  const { id } = useParams();
  const { data } = useFetch({
    url: `https://dummyjson.com/product/${id}`,
  });

  console.log(data);

  return (
    <div className='h-screen'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400 py-10'>
        <div className='grid grid-cols-10 gap-2'>
          <div className='col-span-5 rounded bg-white m-auto'>
            <img src={data?.images[0]} />
          </div>
          <div className='col-span-3 p-4 bg-white divide-y divide-gray-400'>
            <div className='mb-3'>
              <div className='text-xl xl:text-2xl font-medium mb-1'>
                {data?.title}
              </div>
              <div className='text-sm xl:text-base mb-1'>
                by <span className='text-blue-500'>{data?.brand}</span>
              </div>
              <div className='text-sm xl:text-base mb-1 text-blue-500'>
                <Rate disabled defaultValue={data?.rating} /> rating
              </div>
            </div>
            <div className='text-base xl:text-lg mt-3'>{data?.description}</div>
          </div>
          <div className='col-span-2 p-4 rounded bg-white'>
            <div className='text-xl xl:text-2xl font-semibold text-red-500 text-right'>
              ${data?.price}
            </div>
            <div className='text-sm xl:text-base mb-1 text-green-800 mt-3'>
              In stock: {data?.stock}
            </div>
            <Button className='w-full mt-3'>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
