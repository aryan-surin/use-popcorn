import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StartRaiting from './StarRaiting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRaiting maxRaiting={5} />
    <StartRaiting />
  </React.StrictMode>
);
