import { Link } from 'react-router-dom';
import { LanguageDropdown } from './components/LanguageDropdown';

export const BottomNav = () => {
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
      </div>
      <LanguageDropdown />
    </nav>
  );
};