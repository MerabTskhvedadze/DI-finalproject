import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function PageNotFound() {
  const { t } = useTranslation('errorpage');
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-6 '>
      <div className='max-w-md mx-auto'>
        <h1 className='mb-4 text-4xl font-bold text-gray-600'>
          {t('pageNotFound')}
        </h1>
        <p className='mb-8 text-lg text-gray-500'>{t('pageDontExists')}</p>
        <Button to='/'>
          <ArrowLeftIcon className='w-5 h-5 mr-2' />
          {t('backToHome')}
        </Button>
      </div>
    </div>
  );
}
