import { Card } from 'components/Card';
import { useQuery } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { TProduct } from 'types/TProducts';
import { useState } from 'react';
import { Loading } from 'views/Loading';

export const Suggestions = ({ brand }: { brand: string }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 8;
  const { data, isError, isLoading } = useQuery(
    [currentPage, brand, 'suggested'],
    async () => {
      const response = await public_axios.post('/products', {
        keyword: brand,
        page_size: pageSize,
        page_number: currentPage,
      });
      return response.data;
    },
    {
      suspense: false,
    }
  );
  console.log(data);

  if (isError) {
    return (
      <h1 className='text-center text-3xl text-red-500 italic'>
        Oops! something went wrong
      </h1>
    );
  }
  return (
    <>
      <div className='flex justify-end gap-3 px-5 font-medium'>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - pageSize)}
          disabled={currentPage - pageSize <= 0}
          className=' disabled:text-gray-400 disabled:italic'
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + pageSize)}
          disabled={currentPage === data?.total_found}
          className=' disabled:text-gray-400 disabled:italic'
        >
          Next
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {data?.products?.map((product: TProduct) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      )}
    </>
  );
};
