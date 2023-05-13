import { Link } from 'react-router-dom';
import { LanguageDropdown } from 'components/LanguageDropdown';

export const BottomNav = () => {
  return (
    <nav className='bg-amazon-light_blue text-gray-300 flex items-center justify-between py-[5px] px-[10px]'>
      <div>
        <Link to='/products' className='mx-4 hover:text-white'>
          All
        </Link>
        <Link to='/' className='mx-4 hover:text-white'>
          Home
        </Link>
        <Link to='/contact-us' className='mx-4 hover:text-white'>
          Contact Us
        </Link>
      </div>
      <LanguageDropdown />
    </nav>
  );
};
