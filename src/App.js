import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Products from './components/Products';
import ProductForm from './components/ProductForm';

function App() {
  return (

      <div className="App container">
        <ProductForm />
      </div>
      
  );
}

export default App;
