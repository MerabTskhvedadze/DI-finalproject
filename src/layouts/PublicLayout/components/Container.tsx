import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='grow min-w-[300px] max-w-[1000px] md:min-w-[1000px] md:max-w-[1500px] m-auto'>
      {children}
    </div>
  );
};
