import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import { AuthContext, TAuthorizationStage } from 'context/AuthContext';
import { TLocalStorage } from 'types/localstorage';
import { Search } from './components/Search';
import { Auth } from './components/Auth';

import amazonImg from 'assets/images/amazon.png';

export const TopNav = () => {
  const { status, setStatus } = useContext(AuthContext);

  const logoutUser = () => {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN);
    setStatus(TAuthorizationStage.UNAUTHORIZED);
  };

  return (
    <nav className='flex items-center bg-amazon text-white h-[60px]'>
      <Link to={'/'}>
        <img src={amazonImg} className='h-[35px] w-[100px] my-3 mx-4' />
      </Link>
      <div className='flex grow relative items-center px-10'>
        <Search />
      </div>
      <div className='flex items-center m-4'>
        <Auth
          status={status}
          authorized={TAuthorizationStage.AUTHORIZED}
          logoutUser={logoutUser}
        />
        <Link to={'/cart'}>
          <ShoppingCartIcon className='h-[48px] px-3 ' />
        </Link>
      </div>
    </nav>
  );
};
