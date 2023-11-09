import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import { AppContextProvider } from './components/context/app.context.provider';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
