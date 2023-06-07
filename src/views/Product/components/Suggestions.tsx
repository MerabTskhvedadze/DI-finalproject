import axios from 'axios';
import { Card } from 'components/Card';
import { useQuery } from 'react-query';
import { TProduct } from 'types/TProducts';

export const Suggestions = ({ category }: { category: string }) => {
  const { data, isError } = useQuery([category, 'product'], async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data;
  });

  return (
    <>
      {data?.products?.map(({ title, price, thumbnail, id }: TProduct) => (
        <Card key={id} title={title} price={price} img={thumbnail} id={id} />
      ))}
    </>
  );
};
