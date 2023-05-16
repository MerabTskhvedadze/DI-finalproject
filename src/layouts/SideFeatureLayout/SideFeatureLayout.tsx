import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

import { Container } from './components/Container';

export const SideFeatureLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
