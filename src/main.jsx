import React from "react";
import ReactDOM from "react-dom/client";
import TokenProvider from './context/core/TokenContext';
import ThemeContext from './context/theme'
import NotificationsProvider from './context/notifications';
import { ConsultaArbol } from "./pages/query/ConsultaArbol";
import './index.css'
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationsProvider>
      <ThemeContext>
        <TokenProvider>
          {/* <App /> */}
          <ConsultaArbol />
        </TokenProvider>
      </ThemeContext>
    </NotificationsProvider>
  </React.StrictMode>
);
