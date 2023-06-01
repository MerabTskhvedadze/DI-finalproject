import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

export const Header = () => {
  return (
    <header className='min-w-[1000px]'>
      <TopNav />
      <BottomNav />
    </header>
  );
};
