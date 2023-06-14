import { Card } from 'components/Card';
import { useQuery } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { TProduct } from 'types/TProducts';

export const Suggestions = ({ brand }: { brand: string }) => {
  const { data, isError } = useQuery([brand, 'suggested'], async () => {
    const response = await public_axios.post('/products', {
      keyword: brand,
      page_size: 5,
      page_number: 0,
    });
    return response.data;
  });

  if (isError) {
    return (
      <h1 className='text-center text-3xl text-red-500 italic'>
        Oops! something went wrong
      </h1>
    );
  }
  return (
    <>
      {data?.products?.map((product: TProduct) => (
        <Card key={product.id} data={product} />
      ))}
    </>
  );
};
