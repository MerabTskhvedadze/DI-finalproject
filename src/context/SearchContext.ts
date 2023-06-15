import { createContext, useContext } from 'react';

type SearchContextValues = {
  isSearching: boolean;
  searchTerm: string;
  changeSearchTerm: (value: string) => void;
  changeSearchState: (value: boolean) => void;
};

export const SearchContext = createContext<SearchContextValues | undefined>(
  undefined
);

export const useSearch = (): SearchContextValues => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
