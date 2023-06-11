import { useQuery } from 'react-query';
import { Card } from 'components/Card';
import { Carousel } from './components/Carousel';
import { TProduct } from 'types/TProducts';
import { public_axios } from 'utils/public_axios';

export default function Home() {
  const { data, isError } = useQuery('topproducts', async () => {
    const response = await public_axios.post('/products', {
      page_size: 20,
      page_number: 1,
    });
    return response.data;
  });

  if (isError) {
    return (
      <h1 className='text-7xl text mt-48 italic text-red-500'>
        Oops! something went wrong
      </h1>
    );
  }
  return (
    <>
      <Carousel />
      <div className='relative grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-4 -mt-80'>
        {data?.products.map((product: TProduct) => {
          return <Card key={product.id} data={product} />;
        })}
      </div>
    </>
  );
}
