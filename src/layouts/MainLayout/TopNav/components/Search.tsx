import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { public_axios } from 'utils/public_axios';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { useSearch } from 'context/SearchContext';
import { Button } from 'components/Button';
import { TProduct } from 'types/TProducts';

export const Search = () => {
  const { searchTerm, isSearching, changeSearchState, changeSearchTerm } =
    useSearch();

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
    }
  );

  return (
    <>
      <div className='w-full relative'>
        <div className='flex items-center h-10 bg-amazon-yellow rounded'>
          <input
            className='px-4 flex-grow h-full rounded-l text-lg text-black'
            type='text'
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeSearchTerm(e.target.value)
            }
            onFocus={() => changeSearchState(true)}
          />
          <Button
            to={`/search-results/${searchTerm}`}
            className='rounded-none rounded-e-lg'
          >
            <MagnifyingGlassIcon className='h-6 mx-auto text-slate-900' />
          </Button>
        </div>
        {isSearching && (
          <div className='border overflow-auto max-h-96 min-h-[50px] border-gray-500 flex flex-col gap-4 text-xl rounded-sm w-full bg-white text-black absolute z-40'>
            {data?.products.length === 0 || searchTerm === '' ? (
              <p className='w-fit m-auto text-red-500 italic'>
                Products not found
              </p>
            ) : (
              data?.products?.map((product: TProduct) => (
                <Link
                  key={product.id}
                  to={`/products/product/${product.id}`}
                  className='hover:bg-gray-100 px-4 py-2'
                >
                  {product.title}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};
