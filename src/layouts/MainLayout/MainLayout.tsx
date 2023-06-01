import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './components/Container';

export const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};
