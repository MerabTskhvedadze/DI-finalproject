import { Outlet } from 'react-router-dom';

import { Container, TopNav, BottomNav } from './components';

export const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='min-w-[1000px]'>
        <TopNav />
        <BottomNav />
      </header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
