import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { TUser_Roles } from 'types/user.types';
import { MainLayout, SideFeatureLayout } from 'layouts';
import { ProtectedRoutes } from 'components/ProtectedRoutes';
import { Loading } from 'views/Loading';
import { TSessionStorage } from 'types/sessionstorage';

const PageNotFound = lazy(() => import('views/PageNotFound'));
const Home = lazy(() => import('views/Home'));
const Product = lazy(() => import('views/Product'));
const ContactUs = lazy(() => import('views/ContactUs'));
const LogIn = lazy(() => import('views/LogIn'));
const Registration = lazy(() => import('views/Registeration'));
const Settings = lazy(() => import('views/Settings'));
const Products = lazy(() => import('views/Products'));
const Cart = lazy(() => import('views/Cart'));
const Checkout = lazy(() => import('views/Checkout'));
const SearchResult = lazy(() => import('views/SearchResults'));

function App() {
  const currentRole = sessionStorage.getItem(
    TSessionStorage.ROLE
  ) as TUser_Roles;

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
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>

        <Route
          element={
            <ProtectedRoutes
              roles={[TUser_Roles.GUEST]}
              currentRole={currentRole}
            />
          }
        >
          <Route element={<SideFeatureLayout />}>
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Registration />} />
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoutes
              roles={[TUser_Roles.USER]}
              currentRole={currentRole}
            />
          }
        >
          <Route element={<SideFeatureLayout />}>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
