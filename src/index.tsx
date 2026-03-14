import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { ProductCard } from './components/ProductCard';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductCard idProduct={1} titleProduct='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' priceProduct={109.95} descriptionProduct="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday" categoryProduct="men's clothing" imageProduct="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"/>
  </React.StrictMode>
);