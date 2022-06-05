import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {StyledEngineProvider} from '@mui/material/styles';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
