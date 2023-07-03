import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { animateScroll } from 'react-scroll';

export const Footer = () => {
  const { t } = useTranslation('main');

  return (
    <footer className='flex justify-center gap-5 min-w-[800px] py-5 border-t-[1px] border-gray-300 mt-8 text-gray-600'>
      &copy; {t('footerMsg')}
      <button onClick={() => animateScroll.scrollToTop()}>
        <ArrowUpCircleIcon height='20px' width='20px' />
      </button>
    </footer>
  );
};
