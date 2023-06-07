import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from 'components/Button';

export const Search = () => {
  return (
    <div className='w-full relative'>
      <div className='flex items-center h-10 bg-amazon-yellow rounded'>
        <input
          className='px-2 flex-grow h-full rounded-l text-black'
          type='text'
        />
        <Button to='./results' className='rounded-none rounded-e-lg'>
          <MagnifyingGlassIcon className='h-6 mx-auto text-slate-900' />
        </Button>
      </div>
      {/* suggestions div */}
      {/* <div className='rounded-sm mt-[3px] w-full bg-white text-black absolute z-40'></div> */}
    </div>
  );
};
