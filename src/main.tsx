import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Providers } from 'providers/Providers';

import './assets/styles/globalCss.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Providers>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Providers>
    </React.StrictMode>
  </BrowserRouter>
);
