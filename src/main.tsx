import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import './style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './components/context/app.context.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
