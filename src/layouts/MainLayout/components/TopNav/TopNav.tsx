import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  TAuthorizationStage,
  useAuthContext,
  TUser_Roles,
} from 'context/AuthContext';
import { TLocalStorage } from 'types/localstorage';

import { ShoppingCart } from './components/ShoppingCart';
import { SearchContext } from 'context/SearchContext';
import { Search } from './components/Search';
import { Auth } from './components/Auth';

import amazonImg from 'assets/images/amazon.png';

export const TopNav = () => {
  const { status, setStatus, setRole } = useAuthContext();
  const { isSearching, changeSearchState } = useContext(SearchContext);

  const logoutUser = () => {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN);
    setStatus(TAuthorizationStage.UNAUTHORIZED);
    localStorage.removeItem(TLocalStorage.ROLE);
    setRole(TUser_Roles.GUEST);
  };

  return (
    <>
      {isSearching && (
        <div
          className='fixed w-full h-full bg-gray-800 z-40 opacity-[0.5]'
          onMouseDown={() => changeSearchState(false)}
        />
      )}
      <nav className='flex items-center bg-gray-800 text-white h-[60px]'>
        <Link to={'/'}>
          <img src={amazonImg} className='h-[35px] w-[100px] my-3 mx-4' />
        </Link>
        <div className='flex grow relative items-center px-10 z-50'>
          <Search />
        </div>
        <div className='flex items-center m-4'>
          <Auth
            status={status}
            authorized={TAuthorizationStage.AUTHORIZED}
            logoutUser={logoutUser}
          />
          <ShoppingCart />
        </div>
      </nav>
    </>
  );
};
