import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { AppContextProvider } from './components/context/app.context.provider';
import App from './components/app/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
