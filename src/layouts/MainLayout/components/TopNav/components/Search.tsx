import { useState } from 'react';
import { useQuery } from 'react-query';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from 'components/Button';
import { public_axios } from 'utils/public_axios';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useQuery(
    [searchTerm, 'search'],
    async () => {
      const response = await public_axios.post('/products', {
        keyword: searchTerm,
        page_size: 10,
        page_number: 1,
      });
      return response.data;
    },
    {
      enabled: searchTerm !== '',
      suspense: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className='w-full relative'>
      <div className='flex items-center h-10 bg-amazon-yellow rounded'>
        <input
          className='px-2 flex-grow h-full rounded-l text-black'
          type='text'
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <Button to='./results' className='rounded-none rounded-e-lg'>
          <MagnifyingGlassIcon className='h-6 mx-auto text-slate-900' />
        </Button>
      </div>
      {searchTerm !== '' && (
        <div className='flex flex-col gap-4 text-xl rounded-sm mt-[3px] w-full bg-white text-black absolute z-40 p-4'>
          {!data || data?.products.length === 0 ? (
            <h1 className='w-fit m-auto text-red-500 italic'>
              Products not found
            </h1>
          ) : (
            data?.products?.map((product: any) => (
              <h1 key={product.id}>{product.title}</h1>
            ))
          )}
        </div>
      )}
    </div>
  );
};
