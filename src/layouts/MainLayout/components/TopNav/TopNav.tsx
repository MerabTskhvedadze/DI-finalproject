import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext, TAuthorizationStage } from 'context/AuthContext';
import { SearchContext } from 'context/SearchContext';
import { TLocalStorage } from 'types/localstorage';
import { Search } from './components/Search';
import { Auth } from './components/Auth';

import amazonImg from 'assets/images/amazon.png';
import { ShoppingCart } from './components/ShoppingCart';

export const TopNav = () => {
  const { status, setStatus } = useContext(AuthContext);
  const { isSearching, changeSearchState } = useContext(SearchContext);

  const logoutUser = () => {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN);
    setStatus(TAuthorizationStage.UNAUTHORIZED);
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
