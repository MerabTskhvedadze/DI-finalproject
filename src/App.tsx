import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicLayout } from './layouts/PublicLayout';
import { SideFeatureLayout } from 'layouts/SideFeatureLayout';

const PageNotFound = lazy(() => import('./views/PageNotFound'));
const Home = lazy(() => import('./views/Home'));
const Product = lazy(() => import('./views/Product'));
const ContactUs = lazy(() => import('./views/ContactUs'));

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Route>
        <Route element={<SideFeatureLayout />}>
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
