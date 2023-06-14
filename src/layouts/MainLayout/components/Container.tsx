import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-w-[300px] max-w-[1500px] mx-auto mb-10'>{children}</div>
  );
};
