import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='border border-gray-300 rounded-lg py-5 sm:py-10 px-5 max-w-[600px] min-w-[300px] w-fit m-auto'>
      {children}
    </div>
  );
};
