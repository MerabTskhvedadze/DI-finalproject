import logo from 'assets/images/amazonBlack.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='flex justify-center'>
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          className='max-w-[150px] min-w-[80px]: py-5'
        />
      </Link>
    </div>
  );
};
