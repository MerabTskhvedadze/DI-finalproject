import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout, SideFeatureLayout } from 'layouts';
import { Loading } from 'views/Loading';

const PageNotFound = lazy(() => import('views/PageNotFound'));
const Home = lazy(() => import('views/Home'));
const Product = lazy(() => import('views/Product'));
const ContactUs = lazy(() => import('views/ContactUs'));
const LogIn = lazy(() => import('views/LogIn'));
const Registration = lazy(() => import('views/Registeration'));
const Settings = lazy(() => import('views/Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Route>
        <Route element={<SideFeatureLayout />}>
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Registration />} />
        </Route>
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
