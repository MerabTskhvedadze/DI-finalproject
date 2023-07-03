import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Empty, Pagination } from 'antd';
import { useSessionStorage } from 'usehooks-ts';

import { public_axios } from 'utils/public_axios';
import { TProduct } from 'types/TProducts';
import { Breadcrumb } from 'components/Breadcrumb';
import { ErrorModal } from 'components/ErrorModal';
import { Card } from 'components/Card';

export default function SearchResults() {
  const { t } = useTranslation('searchresults');
  const [page, setPage] = useSessionStorage('searchResultsPage', 1);
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
    { text: t('home'), url: '/' },
    { text: t('results') },
  ];

  if (isError) {
    return <ErrorModal />;
  } else if (data.products.length <= 0) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Empty description={t('message')} />
      </div>
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
