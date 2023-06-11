import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { useQuery } from 'react-query';
import { Pagination } from 'antd';

import { SearchContext } from 'context/SearchContext';
import { public_axios } from 'utils/public_axios';
import { TProduct } from 'types/TProducts';
import { Card } from 'components/Card';

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

  const { searchTerm } = useContext(SearchContext);
  const { data } = useQuery([searchTerm, page, 'search-results'], async () => {
    const response = await public_axios.post('/products', {
      keyword: keyword,
      page_size: 10,
      page_number: skip,
    });
    return response.data;
  });

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-3'>
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
