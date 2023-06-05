import { Card } from 'components/Card';
import { useFetch } from 'hooks/useFetch';

export const Suggestions = ({ category }: { category: string }) => {
  const { data } = useFetch({
    url: `https://dummyjson.com/products/category/${category}`,
  });

  return (
    <>
      {data?.products?.map(({ title, price, thumbnail, id }: any) => (
        <Card title={title} price={price} img={thumbnail} id={id} />
      ))}
    </>
  );
};
