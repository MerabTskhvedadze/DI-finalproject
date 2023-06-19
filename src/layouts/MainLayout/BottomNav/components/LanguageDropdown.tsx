import { ChangeEvent, useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
  };

  useEffect(() => {
    setSelectedLanguage(i18next.language);
  }, []);

  return (
    <div className='relative flex items-center justify-center'>
      <div className='relative'>
        <select
          className='appearance-none h-full py-2 pl-3 pr-8 text-blue-500 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option
            value='en'
            onClick={() => i18n.changeLanguage('en')}
            className=' text-black'
          >
            English
          </option>
          <option value='ka' className=' text-black'>
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
