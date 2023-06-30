import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { animateScroll } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className='my-5 flex flex-col items-center'>
      <div className='w-full border-t-2 mb-8' />
      <p className='text-[10px] sm:text-lg flex items-center gap-5'>
        &copy; 2023 Amazon Clone. All rights reserved.
        <button onClick={() => animateScroll.scrollToTop()}>
          <ArrowUpCircleIcon height='20px' width='20px' />
        </button>
      </p>
    </footer>
  );
};
