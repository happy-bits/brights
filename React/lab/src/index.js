import React from 'react';
import ReactDOM from 'react-dom/client';

//import Email from './email/Email'
//import Movie from './movie/Movie'

import Cart from './cart/Cart'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './custom.css'

import ghostbuster from './movie/posters/ghostbusters.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='container mt-3'>

      <div className='my-5'>

        <Cart/>

      </div>

    </div>


  </React.StrictMode>
);


