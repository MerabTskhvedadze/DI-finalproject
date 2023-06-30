import { ChangeEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useSessionStorage } from 'usehooks-ts';
import { Input, Pagination, message } from 'antd';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

import { public_axios } from 'utils/public_axios';
import { private_axios } from 'utils/private_axios';
import { TProduct } from 'types/TProducts';
import { Button } from 'components/Button';
import { useTranslation } from 'react-i18next';
import { Image } from 'components/Image';

export default function AdminPanel() {
  const queryClient = useQueryClient();
  const { t } = useTranslation('admin');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useSessionStorage(
    'currentPageAdminPanel',
    1
  );
  const itemsPerPage = 20;
  const skip = (currentPage - 1) * itemsPerPage;

  const { data, isError } = useQuery(
    [searchTerm, currentPage, 'adminPanel'],
    async () => {
      const response = await public_axios.post('/products', {
        keyword: searchTerm,
        page_size: itemsPerPage,
        page_number: skip,
      });
      return response.data;
    },
    {
      suspense: false,
    }
  );

  const { mutateAsync } = useMutation(async (id: number) => {
    try {
      await private_axios.delete(`/product/${id}`);
      message.success('Product Deleted');
      queryClient.invalidateQueries();
    } catch (error) {
      message.error('Oops! something went wrong');
    }
  });

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
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
      <div className='px-5 lg:px-32 pt-5'>
        <div className='flex justify-center items-center gap-5 mb-5'>
          <Input
            type='text'
            placeholder={t('search')}
            onChange={handleOnChange}
            className='w-[300px] h-[35px]'
          />
          <Button to={'create'}>{t('addProduct')}</Button>
        </div>
        <div className='flex flex-col w-full py-5 px-10 bg-gray-200 rounded-lg divide-y divide-gray-300'>
          {data?.products.map(
            ({ id, images, brand, title, price }: TProduct) => (
              <div key={id} className='flex justify-between py-2 '>
                <div className='flex items-start gap-2'>
                  <Image src={images[0]} width='100px' />
                  <div>
                    <Link
                      to={`/products/product/${id}`}
                      target='_blank'
                      className='font-medium hover:underline hover:text-blue-500'
                    >
                      {title}
                    </Link>
                    <h2 className='font-medium text-gray-500'>by: {brand}</h2>
                    <p className='font-medium italic text-blue-500'>${price}</p>
                  </div>
                </div>
                <div className='ml-5'>
                  <div className='flex items-start justify-end select-none divide-x divide-gray-300'>
                    <Link to={`edit/${id}`}>
                      <PencilSquareIcon className='h-[25px] px-1 cursor-pointer text-blue-400 hover:text-blue-500' />
                    </Link>
                    <TrashIcon
                      onClick={async () => await mutateAsync(id)}
                      className='h-[25px] px-1 cursor-pointer text-blue-400 hover:text-blue-500'
                    />
                  </div>
                </div>
              </div>
            )
          )}
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
      </div>
    </>
  );
}
