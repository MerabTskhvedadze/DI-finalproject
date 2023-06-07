import axios from 'axios';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll/modules';

import {
  ProductPreview,
  ProductDetails,
  ProductActions,
  Suggestions,
} from './components';

export default function Product() {
  const { id } = useParams();
  const { data, isError } = useQuery([id, 'product'], async () => {
    const response = await axios.get(`https://dummyjson.com/product/${id}`);
    return response.data;
  });

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  }, [id]);

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-8 gap-2 p-4'>
        <div className='col-span-8 lg:col-span-4 rounded bg-white py-4 w-full max-w-[900px]'>
          <ProductPreview images={data?.images ?? []} />
        </div>
        <div className='col-span-5 lg:col-span-2 p-4 bg-white divide-y divide-gray-400 rounded'>
          <ProductDetails
            title={data?.title}
            brand={data?.brand}
            rating={data?.rating}
            description={data?.description}
          />
        </div>
        <div className='col-span-3 lg:col-span-2 p-4 rounded bg-white'>
          <ProductActions stock={data?.stock} price={data?.price} />
        </div>
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3'>
        <Suggestions category={data?.category} />
      </div>
    </div>
  );
}
