import React, {useState, createContext} from "react";
import "./custom.scss";
import "./App.css"
import NavBar from "./components/navbar/NavBar.js";
import Home from './components/pages/home/Home.js';
import Footer from "./components/footer/Footer";
import ProductsList from './components/pages/products list/ProductsList';
import Product from'./components/pages/product/Product'
import Error from "./components/pages/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {PrivateRoute} from './components/privateRoute'

function App() {
  const [isLogged, setIsLogged] =useState(false)
 
  return (
    <div className="App">
      <Router>
           <NavBar  />
<br />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products/zpma5agmwdiyv8k8uuk9a" element={<Product />} />
      <Route element={<PrivateRoute isLogged={isLogged} />}>
         <Route path="/cart" element={<ProductsList />} />
      </Route> 
      <Route path="/Products" element={<ProductsList />} />

        <Route path="*" element={<Error />} />

    </Routes>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
