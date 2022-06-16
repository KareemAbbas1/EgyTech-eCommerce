import React, {useState} from "react";
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
  useParams
} from "react-router-dom";
import {PrivateRoute} from './components/privateRoute'
import OrdersList from './components/pages/orders/OrdersList';
import CustomersList from './components/pages/customers/Customers';
import CustomerDetail from './components/pages/customers/CustomerDetail';

function App() {
  const [isLogged, setIsLogged] =useState(false)

  return (
    <div className="App">
           <NavBar  />

      <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products/:id" element={<Product />} />
      <Route element={<PrivateRoute isLogged={isLogged} />}>
         <Route path="/cart" element={<ProductsList />} />
      </Route> 
      <Route path="/Products" element={<ProductsList />} />
      <Route path="/orders" element={<OrdersList />} />
      <Route path="/customers" element={<CustomersList />} />
      <Route path="customers/:userId" element={<CustomerDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
        </Router> 
        <Footer />
    </div>
  );
}

export default App;
