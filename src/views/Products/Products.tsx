import { useState } from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { animateScroll } from 'react-scroll';
import { useSessionStorage } from 'usehooks-ts';
import { Pagination, Select } from 'antd';

import { ErrorModal } from 'components/ErrorModal';
import { Card } from 'components/Card';
import { Breadcrumb } from 'components/Breadcrumb';
import { TProduct } from 'types/TProducts';
import { public_axios } from 'utils/public_axios';
import { filteredOptions } from './utils/selectHelper';

export default function Products() {
  const { t } = useTranslation('products');
  const [brandName, setBrandName] = useState<string>('Samsung');

  const [currentPage, setCurrentPage] = useSessionStorage(
    'currentPageProducts',
    1
  );
  const itemsPerPage = 20;
  const skip = (currentPage - 1) * itemsPerPage;

  const { data, isError } = useQuery(
    [skip, brandName, 'products'],
    async () => {
      const response = await public_axios.post('/products', {
        page_size: itemsPerPage,
        page_number: skip,
        keyword: brandName,
      });
      return response.data;
    }
  );

  const pageHandler = (page: number) => {
    setCurrentPage(page);
    animateScroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuart',
    });
  };

  const breadcrumbItems = [
    { text: t('home'), url: '/' },
    { text: t('products') },
  ];

  const handleBrandChange = (value: string) => {
    setBrandName(value);
    setCurrentPage(1);
  };

  if (isError) {
    return <ErrorModal />;
  }
  return (
    <>
      <div className='flex justify-between items-center'>
        <Breadcrumb items={breadcrumbItems} />
        <div className='w-[150px] mx-3 mt-3'>
          <h1 className='ml-1 text-blue-500'>{t('filter')}</h1>
          <Select
            defaultValue={brandName}
            value={brandName}
            showSearch
            size='large'
            onChange={handleBrandChange}
            style={{ width: '100%' }}
            options={filteredOptions(brandName).map((item) => ({
              value: item,
              label: item,
            }))}
          />
        </div>
      </div>
      <div className='grid grid-cols-2 m:grid-cols-3 lg:grid-cols-4 '>
        {data?.products.map((product: TProduct) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <Pagination
        className='m-auto my-5 w-fit'
        defaultCurrent={currentPage}
        current={currentPage}
        defaultPageSize={itemsPerPage}
        showSizeChanger={false}
        total={data?.total_found}
        onChange={pageHandler}
      />
    </>
  );
}
