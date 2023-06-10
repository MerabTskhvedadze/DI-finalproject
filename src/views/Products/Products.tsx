import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Pagination } from 'antd';
import { animateScroll } from 'react-scroll';

import { Card } from 'components/Card';
import { Breadcrumb } from 'components/Breadcrumb';
import { TProduct } from 'types/TProducts';

function Products() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 20;
  const skip = (page - 1) * itemsPerPage;

  const onChange = (page: number) => {
    setPage(page);
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  const { data, isError } = useQuery(
    [itemsPerPage, skip, 'product'],
    async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
      );
      return response.data;
    }
  );

  const breadcrumbItems = [
    { text: 'Home', url: '/' },
    { text: 'Products', url: '/products' },
  ];

  if (isError) {
    return (
      <h1 className='text-7xl text mt-48 italic text-red-500'>
        Oops! something went wrong
      </h1>
    );
  }
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data?.products.map(({ title, images, id, price }: TProduct) => (
          <Card key={id} title={title} img={images[0]} id={id} price={price} />
        ))}
      </div>
      <div className='w-full my-10'>
        <Pagination
          className='m-auto w-fit'
          defaultCurrent={page}
          current={page}
          defaultPageSize={itemsPerPage}
          showSizeChanger={false}
          total={data?.total}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Products;
