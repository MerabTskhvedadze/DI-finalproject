import { useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Pagination } from 'antd';
import { useFetch } from 'hooks/useFetch';
import { Card } from 'components/Card';
import { TProduct } from 'types/TProducts';

function Products() {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 20;
  const skip = (page - 1) * itemsPerPage;

  const { data } = useFetch({
    url: `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`,
  });

  const onChange = (page: number) => {
    setPage(page);
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10'>
        {data?.products.map(({ title, images, id, price }: TProduct) => (
          <Card key={id} title={title} img={images[0]} id={id} price={price} />
        ))}
      </div>
      <div className='w-full'>
        <Pagination
          className='m-auto w-fit mt-10'
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
