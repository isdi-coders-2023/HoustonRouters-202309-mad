import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import { AppContextProvider } from './components/context/app.context.provider';
import { App } from './components/app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
