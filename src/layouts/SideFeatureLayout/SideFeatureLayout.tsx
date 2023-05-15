import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

export const SideFeatureLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
