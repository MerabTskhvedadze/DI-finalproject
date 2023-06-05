import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetch = ({ url }: { url: string }) => {
  const fetchData = async () => {
    const resp = await axios(url);
    return resp.data;
  };

  return useQuery(url, fetchData);
};
