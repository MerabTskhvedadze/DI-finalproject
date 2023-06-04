import { Card } from 'components/Card';
import { MainCarousel } from './components/MainCarousel';
import { useProducts } from 'hooks/useProducts';
import { TProduct } from 'types/TProducts';

export default function Home() {
  const { data } = useProducts({
    url: 'https://dummyjson.com/products?limit=10',
  });

  return (
    <>
      <MainCarousel />
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-40'>
        {data?.products.map(({ title, images, id }: TProduct) => {
          return <Card key={id} title={title} img={images[0]} link={id} />;
        })}
      </div>
    </>
  );
}
