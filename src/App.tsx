import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicLayout } from './layouts/PublicLayout';

const PageNotFound = lazy(() => import('./views/PageNotFound'));
const Home = lazy(() => import('./views/Home'));

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
