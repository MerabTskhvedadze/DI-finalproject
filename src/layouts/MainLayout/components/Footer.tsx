import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { animateScroll } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className='flex justify-center gap-5 min-w-[800px] bg-amazon py-12  mt-8 text-gray-300'>
      &copy; 2023 Amazon clone. All rights reserved.
      <button onClick={() => animateScroll.scrollToTop()}>
        <ArrowUpCircleIcon height='25px' width='25px' />
      </button>
    </footer>
  );
};
