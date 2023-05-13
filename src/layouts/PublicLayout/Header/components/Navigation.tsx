import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Search } from './Search';

import amazonImg from 'assets/images/amazon.png';

export const Navigation = () => {
  return (
    <div className='flex bg-amazon text-white h-[60px]'>
      {/* left */}
      <div className='flex items-center m-4'>
        <img src={amazonImg} className='h-[35px] w-[100px] m-2' />
        <div className='px-4 items-center'>
          <div className='text-xs xl:text-sm'>Deliver to</div>
          <div className='text-sm xl:text-base font-bold'>Georgia</div>
        </div>
      </div>
      <div className='flex grow relative items-center'>
        <Search />
      </div>
      {/* right */}
      <div className='flex items-center m-4'>
        <div className='px-4 items-center'>
          <div className='text-xs xl:text-sm'>Hello, sign in</div>
          <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
        </div>
        <div className='px-4 items-center'>
          <div className='text-xs xl:text-sm'>Returns</div>
          <div className='text-sm xl:text-base font-bold'>& Orders</div>
        </div>
        <div className='flex px-3'>
          <ShoppingCartIcon className='h-[48px]' />
          <div className='mt-7 text-xs xl:text-sm font-bold'>Cart</div>
        </div>
      </div>
    </div>
  );
};
