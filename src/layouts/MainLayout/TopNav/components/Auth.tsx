import { Link } from 'react-router-dom';

type AuthProps = {
  authorized: boolean;
  logout: () => void;
};

export const Auth = ({ logout, authorized }: AuthProps) => {
  return (
    <div className='mx-2 flex flex-col font-bold text-amazon-yellow'>
      {authorized ? (
        <span className=' cursor-pointer' onClick={logout}>
          Logout
        </span>
      ) : (
        <>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </>
      )}
    </div>
  );
};
