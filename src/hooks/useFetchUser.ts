import { useContext, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { AuthContext, TAuthorizationStage } from 'context/AuthContext';
import { private_axios } from 'utils/private_axios';

export const useFetchUser = () => {
  const { status } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const fetchUser = async () => {
    const response = await private_axios('/me');
    return response.data;
  };

  const { data: userData, refetch } = useQuery('userData', fetchUser);

  useEffect(() => {
    if (status === TAuthorizationStage.UNAUTHORIZED) {
      queryClient.removeQueries('userData');
      queryClient.clear();
    }
    refetch();
  }, [status, queryClient, refetch]);

  return { userData };
};
