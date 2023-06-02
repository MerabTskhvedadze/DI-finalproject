import { Link } from 'react-router-dom';

type AuthProps = {
  status: string;
  authorized: string;
  logoutUser: () => void;
};

export const Auth = ({ status, logoutUser, authorized }: AuthProps) => {
  if (status === authorized) {
    return (
      <span className='mx-4 cursor-pointer font-medium' onClick={logoutUser}>
        Logout
      </span>
    );
  }
  return (
    <div className='mx-4 flex gap-1 font-medium'>
      <Link to={'/login'}>Login</Link>
      <span>/</span>
      <Link to={'/register'}>Register</Link>
    </div>
  );
};
