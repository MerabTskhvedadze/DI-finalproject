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
const Products = lazy(() => import('views/Products'));
const Cart = lazy(() => import('views/Cart'));
const SearchResult = lazy(() => import('views/SearchResults'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path={'/search-results/:keyword?'}
            element={<SearchResult />}
          />
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
