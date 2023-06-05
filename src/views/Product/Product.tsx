import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';

import { ProductPreview } from './components/ProductPreview';
import { ProductDetails } from './components/ProductDetails';
import { ProductActions } from './components/ProductActions';

export default function Product() {
  const { id } = useParams();
  const { data } = useFetch({
    url: `https://dummyjson.com/product/${id}`,
  });

  return (
    <div className='min-h-screen  max-w-[900px] m-auto'>
      <div className='grid grid-cols-5 gap-2 p-4'>
        <div className='col-span-5 rounded bg-white m-auto py-4 w-full'>
          <ProductPreview images={[...data.images]} />
        </div>
        <div className='col-span-3 p-4 bg-white divide-y divide-gray-400 rounded'>
          <ProductDetails
            title={data?.title}
            brand={data?.brand}
            rating={data?.rating}
            description={data?.description}
          />
        </div>
        <div className='col-span-2 p-4 rounded bg-white'>
          <ProductActions stock={data?.stock} price={data?.price} />
        </div>
      </div>
    </div>
  );
}
