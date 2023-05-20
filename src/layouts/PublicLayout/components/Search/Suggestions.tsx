import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type SuggestionProps = {
  suggestions: { id: number; title: string }[];
};

export const Suggestions = ({ suggestions }: SuggestionProps) => {
  return (
    <div className='rounded-sm mt-[3px] w-full bg-white text-black absolute z-40'>
      {suggestions.map((suggestion) => (
        <Link
          className='px-5 py-2 m-1 font-bold tracking-wide italic hover:bg-gray-100 rounded-lg flex items-center justify-between'
          to={`/${suggestion.id}`}
          key={suggestion.id}
        >
          {suggestion.title}
          <ArrowRightIcon className='h-5' />
        </Link>
      ))}
    </div>
  );
};
