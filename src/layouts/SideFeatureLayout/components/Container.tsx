import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return <div className=' rounded-lg py-5 px-5 min-w-[500px]'>{children}</div>;
};
