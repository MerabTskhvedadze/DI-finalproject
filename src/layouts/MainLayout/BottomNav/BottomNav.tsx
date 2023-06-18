import { Link } from 'react-router-dom';
import { LanguageDropdown } from './components/LanguageDropdown';
import { TUser_Roles, useProtectedContext } from 'context/ProtectedContext';

export const BottomNav = () => {
  const { currentRole } = useProtectedContext();

  return (
    <nav className='bg-gray-700 text-gray-300 flex items-center justify-between py-[5px] px-[10px]'>
      <div>
        <Link to='/' className='mx-4 hover:text-white'>
          Home
        </Link>
        <Link to='/products' className='mx-4 hover:text-white'>
          Products
        </Link>
        <Link to='/contact-us' className='mx-4 hover:text-white'>
          Contact Us
        </Link>
        {(currentRole === TUser_Roles.USER ||
          currentRole === TUser_Roles.ADMIN) && (
          <Link to='/settings' className='mx-4 hover:text-white'>
            Settings
          </Link>
        )}
        {currentRole === TUser_Roles.ADMIN && (
          <Link to='/admin-panel' className='mx-4 hover:text-white'>
            Admin panel
          </Link>
        )}
      </div>
      <LanguageDropdown />
    </nav>
  );
};
