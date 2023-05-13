import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Search = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center h-10 bg-amazon-yellow rounded'>
        <input
          className='grow flex items-center h-full rounded-l text-black'
          type='text'
        />
        <button className='w-[45px]'>
          <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
        </button>
      </div>
    </div>
  );
};
