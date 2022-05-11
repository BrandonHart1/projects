import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
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
        <div>
          <Navbar bg="black" variant="dark" >
            <Navbar>
              MeBay
            </Navbar>
          </Navbar>
        </div>
        <ProductForm />
      </div>

  );
}

export default App;
