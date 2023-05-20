import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { Suggestions } from './Suggestions';
import { Button } from 'components/Button';

type suggestions = {
  id: number;
  title: string;
}[];

export const Search = () => {
  const [suggestions, setSuggestions] = useState<suggestions>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getSuggestions = () => {
    setSuggestions([
      { id: 1, title: 'iphone' },
      { id: 2, title: 'sum' },
      { id: 3, title: 'xia' },
      { id: 4, title: 'hono' },
      { id: 5, title: 'hua' },
    ]);
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  const filteredSuggestions = suggestions?.filter((suggestion) => {
    const currentSearchTerm = searchTerm.toLowerCase();
    const title = suggestion.title.toLowerCase();
    return currentSearchTerm && title.includes(currentSearchTerm);
  });

  console.log(filteredSuggestions);

  return (
    <div className='w-full relative'>
      <div className='flex items-center h-10 bg-amazon-yellow rounded'>
        <input
          className='px-2 flex-grow h-full rounded-l text-black'
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          to='./results'
          color='yellow'
          className='rounded-none rounded-e-lg'
        >
          <MagnifyingGlassIcon className='h-6 mx-auto text-slate-900' />
        </Button>
      </div>
      {searchTerm && <Suggestions suggestions={filteredSuggestions} />}
    </div>
  );
};
