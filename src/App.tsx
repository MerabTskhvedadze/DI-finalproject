import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
