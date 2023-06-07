import { useQuery } from 'react-query';
import axios from 'axios';
import { Card } from 'components/Card';
import { Carousel } from './components/Carousel';
import { TProduct } from 'types/TProducts';

export default function Home() {
  const { data, isError } = useQuery('products', async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=12');
    return response.data;
  });

  return (
    <>
      <Carousel />
      <div className='relative grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-40'>
        <h1 className='absolute -top-14 left-4 text-[1.50rem] font-semibold tracking-wide uppercase '>
          Top products
        </h1>
        {data?.products.map(({ title, images, id, price }: TProduct) => {
          return (
            <Card
              key={id}
              title={title}
              img={images[0]}
              id={id}
              price={price}
            />
          );
        })}
      </div>
    </>
  );
}
