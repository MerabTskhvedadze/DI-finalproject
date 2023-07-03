import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useSessionStorage } from 'usehooks-ts';
import { Pagination } from 'antd';
import { TProduct } from 'types/TProducts';
import { public_axios } from 'utils/public_axios';

import { Card } from 'components/Card';
import { Carousel } from './components/Carousel';
import { ErrorModal } from 'components/ErrorModal';

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
    return <ErrorModal />;
  }
  return (
    <>
      <Carousel />
      <div className='relative -mt-80 grid grid-cols-2 m:grid-cols-3 lg:grid-cols-4'>
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
