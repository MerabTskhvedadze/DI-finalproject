import { private_axios } from 'utils/private_axios';
import { useQuery } from 'react-query';
import { message } from 'antd';

export const UserDetails = () => {
  const { data } = useQuery(
    'profile',
    async () => {
      const response = await private_axios.get('/me');
      return response?.data;
    },
    {
      onError: (error: any) => message.error(error?.message),
    }
  );

  return (
    <div className='bg-white overflow-hidden shadow rounded-lg border'>
      <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>First name</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {data.firstName}
            </dd>
          </div>
          <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>last name</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {data.lastName}
            </dd>
          </div>
          <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {data.email}
            </dd>
          </div>
          <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Phone number</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {data.phoneNumber}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
