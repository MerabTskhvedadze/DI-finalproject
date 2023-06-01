import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Search } from './components/Search';

import amazonImg from 'assets/images/amazon.png';

export const TopNav = () => {
  return (
    <nav className='flex items-center bg-amazon text-white h-[60px]'>
      <Link to={'/'}>
        <img src={amazonImg} className='h-[35px] w-[100px] my-3 mx-4' />
      </Link>
      <div className='flex grow relative items-center'>
        <Search />
      </div>
      <div className='flex items-center m-4'>
        <div className='px-4 flex gap-1 font-medium'>
          <Link to={'/login'}>Login</Link>
          <span>/</span>
          <Link to={'/register'}>Register</Link>
        </div>
        <Link to={'/cart'}>
          <ShoppingCartIcon className='h-[48px] px-3 ' />
        </Link>
      </div>
    </nav>
  );
};
