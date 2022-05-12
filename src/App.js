import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Products from "./components/Products";
import ProductForm from "./components/ProductForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        MeBay
      </Navbar>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/product/new" element={<ProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
