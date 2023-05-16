import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='border border-gray-300 rounded-lg py-5 sm:py-10 px-5 mx-auto max-w-screen-sm'>
      {children}
    </div>
  );
};
