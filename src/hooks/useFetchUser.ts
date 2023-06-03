import { useContext, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { AuthContext, TAuthorizationStage } from 'context/AuthContext';
import { private_axios } from 'utils/private_axios';

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export const useFetchUser = () => {
  const { status } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const axiosFetch = async () => {
    const response = await private_axios.get('/me');
    return response.data;
  };

  const {
    data: userData,
    isLoading,
    isError,
    refetch,
  } = useQuery<UserData>('userData', axiosFetch, {
    enabled: status === TAuthorizationStage.AUTHORIZED,
  });

  useEffect(() => {
    if (status === TAuthorizationStage.UNAUTHORIZED) {
      queryClient.removeQueries('userData');
      queryClient.clear();
    }
    refetch();
  }, [status, queryClient, refetch]);

  return { userData, isLoading, isError };
};
