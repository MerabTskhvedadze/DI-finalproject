import { useQuery } from 'react-query';
import { Card } from 'components/Card';
import { Carousel } from './components/Carousel';
import { TProduct } from 'types/TProducts';
import { useCallback } from 'react';
import { Pagination } from 'antd';
import { useSessionStorage } from 'usehooks-ts';
import { public_axios } from 'utils/public_axios';

export default function Home() {
  const [currentPage, setCurrentPage] = useSessionStorage('currentPageHome', 1);
  const itemsPerPage = 20;
  const skip = (currentPage - 1) * itemsPerPage;

  const { data, isError } = useQuery([currentPage, 'topproducts'], async () => {
    const response = await public_axios.post('/products', {
      page_size: itemsPerPage,
      page_number: skip,
    });
    return response.data;
  });

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  if (isError) {
    return (
      <h1 className='text-center text-3xl text-red-500 italic'>
        Oops! something went wrong
      </h1>
    );
  }
  return (
    <>
      <Carousel />
      <div className='relative -mt-96 md:-mt-80 lg:-mt-60 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {data?.products.map((product: TProduct) => {
          return <Card key={product.id} data={product} />;
        })}
      </div>
      <div className='flex justify-center my-5'>
        <Pagination
          showSizeChanger={false}
          showQuickJumper
          current={currentPage}
          defaultPageSize={itemsPerPage}
          total={data?.total_found}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
