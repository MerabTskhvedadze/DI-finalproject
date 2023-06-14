import { useState } from 'react';
import { useQuery } from 'react-query';
import { Pagination } from 'antd';
import { animateScroll } from 'react-scroll';

import { Card } from 'components/Card';
import { Breadcrumb } from 'components/Breadcrumb';
import { TProduct } from 'types/TProducts';
import { public_axios } from 'utils/public_axios';

export default function Products() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 20;
  const skip = (page - 1) * itemsPerPage;

  const { data, isError } = useQuery([skip, 'products'], async () => {
    const response = await public_axios.post('/products', {
      page_size: itemsPerPage,
      page_number: skip,
    });
    return response.data;
  });

  const pageHandler = (page: number) => {
    setPage(page);
    animateScroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuart',
    });
  };

  const breadcrumbItems = [
    { text: 'Home', url: '/' },
    { text: 'Products', url: '/products' },
  ];

  if (isError) {
    return (
      <h1 className='text-center text-3xl text-red-500 italic'>
        Oops! something went wrong
      </h1>
    );
  }
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-4'>
        {data?.products.map((product: TProduct) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <Pagination
        className='m-auto my-5 w-fit'
        defaultCurrent={page}
        current={page}
        defaultPageSize={itemsPerPage}
        showSizeChanger={false}
        total={data?.total_found}
        onChange={pageHandler}
      />
    </>
  );
}
