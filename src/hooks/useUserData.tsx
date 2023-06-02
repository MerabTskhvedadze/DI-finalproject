import { AuthContext } from 'context/AuthContext';
import { useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import { private_axios } from 'utils/private_axios';

export const useUserData = () => {
  const { status } = useContext(AuthContext);
  const { data, isLoading, isError, refetch } = useQuery(
    'userData',
    async () => {
      const response = await private_axios.get('/me');
      return response.data;
    },
    {
      refetchOnMount: false,
      refetchInterval: 0,
      cacheTime: 0,
    }
  );

  useEffect(() => {
    refetch();
  }, [status, refetch]);

  return { data, isLoading, isError };
};
