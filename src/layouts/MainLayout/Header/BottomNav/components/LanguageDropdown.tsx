import { useState, ChangeEvent } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className='relative flex items-center justify-center'>
      <div className='relative'>
        <select
          className='appearance-none h-full py-2 pl-3 pr-8 text-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value='en' className='text-amazon-light_blue'>
            English
          </option>
          <option value='ka' className='text-amazon-light_blue'>
            Georgian
          </option>
        </select>
        <div className='absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full pointer-events-none'>
          <ChevronDownIcon className='w-5 h-5 text-gray-300' />
        </div>
      </div>
    </div>
  );
};
