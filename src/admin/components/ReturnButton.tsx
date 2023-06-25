import { Button } from 'components/Button';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export const ReturnButton = () => {
  return (
    <Button to='/admin-panel' className='w-fit h-fit rounded-full px-2'>
      <ArrowUturnLeftIcon className='w-4 h-4' />
    </Button>
  );
};
