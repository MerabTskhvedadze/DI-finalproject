import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Container, Header } from './components';

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
