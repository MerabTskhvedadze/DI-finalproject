import { createContext } from 'react';

type SearchContextValues = {
  isSearching: boolean;
  searchTerm: string;
  changeSearchTerm: (value: string) => void;
  changeSearchState: (value: boolean) => void;
};

export const SearchContext = createContext<SearchContextValues>({
  isSearching: false,
  searchTerm: '',
  changeSearchTerm: () => {},
  changeSearchState: () => {},
});
