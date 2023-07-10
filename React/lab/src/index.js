import React from 'react';
import ReactDOM from 'react-dom/client';

import Email from './email/Email'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hallå eller?</h1>
    <Email />
    <Email />
    <Email />
  </React.StrictMode>
);


