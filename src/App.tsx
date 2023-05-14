import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicLayout } from './layouts/PublicLayout';

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
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
