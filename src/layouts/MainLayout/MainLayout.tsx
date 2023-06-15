import { Outlet } from 'react-router-dom';

import { Container } from './components';
import { BottomNav } from './BottomNav/BottomNav';
import { TopNav } from './TopNav/TopNav';

export const MainLayout = () => {
  return (
    <>
      <header>
        <TopNav />
        <BottomNav />
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
