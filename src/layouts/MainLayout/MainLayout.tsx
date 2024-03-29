import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { TopNav, BottomNav } from './components/navigation';

export const MainLayout = () => {
  return (
    <>
      <header>
        <TopNav />
        <BottomNav />
      </header>
      <div className='min-h-screen min-w-[700px] max-w-[1500px] mx-auto mb-10'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
