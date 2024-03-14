import React from 'react';
import './App.css';
import { ShowProducts } from './components/ShowProducts';
import { AddProduct } from './components/AddProduct';
import { ProductDetails } from './components/ProductDetails';
import { UpdateProduct } from './components/UpdateProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBarMenu } from './components/NavBarMenu';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path='/' element={<ShowProducts />} />
          <Route exact path='/addProduct' element={<AddProduct />} />
          <Route exact path='/:id/' element={<ProductDetails />} />
          <Route exact path='/:id/update' element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}
