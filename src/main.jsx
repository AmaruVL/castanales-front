import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TokenProvider from './context/core/TokenContext';
import { ThemeContext } from './context/theme';
import { AppRouter } from './router/AppRouter';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeContext>
        <TokenProvider>
          <AppRouter />
        </TokenProvider>
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>,
);
