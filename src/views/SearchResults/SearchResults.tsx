import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { useQuery } from 'react-query';
import { Pagination } from 'antd';

import { public_axios } from 'utils/public_axios';
import { TProduct } from 'types/TProducts';
import { Card } from 'components/Card';
import { Breadcrumb } from 'components/Breadcrumb';

export default function SearchResults() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 20;
  const skip = (page - 1) * itemsPerPage;
  const { keyword } = useParams();

  const pageHandler = (page: number) => {
    setPage(page);
    animateScroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuart',
    });
  };

  const { data, isError } = useQuery(
    [keyword, page, 'search-results'],
    async () => {
      const response = await public_axios.post('/products', {
        keyword: keyword,
        page_size: 24,
        page_number: skip,
      });
      return response.data;
    }
  );

  const breadcrumbItems = [
    { text: 'Home', url: '/' },
    { text: 'Search results' },
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
      <div className='grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4'>
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
