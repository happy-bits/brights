import React from 'react';
import ReactDOM from 'react-dom/client';

import Email from './email/Email'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './custom.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Email />

  </React.StrictMode>
);


