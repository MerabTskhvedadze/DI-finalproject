import { Link } from 'react-router-dom';
import { useFetchUser } from 'hooks/useFetchUser';

export const Greeting = () => {
  const { userData } = useFetchUser();
  return (
    <div className='flex flex-col ml-5 mr-10 font-medium'>
      <span>Hello</span>
      <Link to={'/setting'}>
        {userData ? `${userData?.firstName?.slice(0, 8)}...` : 'Guest'}
      </Link>
    </div>
  );
};
