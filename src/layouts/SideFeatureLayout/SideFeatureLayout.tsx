import { Outlet } from 'react-router-dom';
import { Container, Header, Footer } from './components';

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
