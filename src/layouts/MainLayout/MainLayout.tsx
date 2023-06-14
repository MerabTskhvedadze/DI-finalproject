import { Outlet } from 'react-router-dom';

import { Container, TopNav, BottomNav } from './components';

export const MainLayout = () => {
  return (
    <>
      <header className='min-w-[300px]'>
        <TopNav />
        <BottomNav />
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
