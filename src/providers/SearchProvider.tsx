import { useState, PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchContext } from 'context/SearchContext';

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const location = useLocation();

  const changeSearchState = (value: boolean) => setIsSearching(value);
  const changeSearchTerm = (value: string) => setSearchTerm(value);

  useEffect(() => {
    changeSearchState(false);
    changeSearchTerm('');
  }, [location]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        changeSearchTerm,
        isSearching,
        changeSearchState,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
