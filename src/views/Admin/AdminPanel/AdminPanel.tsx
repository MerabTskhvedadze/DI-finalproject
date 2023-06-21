import { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { TProduct } from 'types/TProducts';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Input, Pagination } from 'antd';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
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
        <div className='flex justify-center mb-5'>
          <Input
            type='text'
            placeholder={`search`}
            onChange={handleOnChange}
            className='w-[300px]'
          />
        </div>
        <div className='flex flex-col w-full py-5 px-10 bg-gray-200 rounded-lg divide-y divide-gray-300'>
          {data?.products.map(
            ({ id, images, brand, title, price }: TProduct) => (
              <div key={id} className='flex justify-between py-2 '>
                <div className='flex items-start gap-2'>
                  <img src={images[0]} className='w-[100px]' />
                  <div>
                    <Link
                      to={`/products/product/${id}`}
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
                    <PencilSquareIcon
                      onClick={() => navigate(`edit/${id}`)}
                      className='h-[25px] px-1 cursor-pointer text-blue-400 hover:text-blue-500'
                    />
                    <TrashIcon
                      onClick={() => console.log(id)}
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
