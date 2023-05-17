import React from 'react';
import ReactDOM from 'react-dom/client';
import TokenProvider from './context/core/TokenContext';
import ThemeContext from './context/theme';
import NotificationsProvider from './context/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App.jsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeContext>
          <TokenProvider>
            <App />
          </TokenProvider>
        </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>,
);
