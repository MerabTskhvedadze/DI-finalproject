import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { Button } from 'components/Button';
import { useTranslation } from 'react-i18next';

export const ErrorModal = () => {
  const { t } = useTranslation('errorModal');

  return (
    <div className='fixed w-full bg-white right-0 top-0 z-50'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='max-w-md mx-auto'>
          <h1 className='mb-4 text-4xl font-bold text-gray-600'>
            {t('error')}
          </h1>
          <p className='mb-8 text-lg text-gray-500'>{t('message')}</p>
          <Button to='/contact-us'>
            <ChatBubbleLeftEllipsisIcon className='w-5 h-5 mr-2 mt-1' />
            {t('letUsKnow')}
          </Button>
        </div>
      </div>
    </div>
  );
};
