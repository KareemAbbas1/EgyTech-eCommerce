import "./custom.scss";
import "./App.css";
import { products } from "./utils/_Data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Home from './components/pages/home/Home.js';
import Footer from "./components/footer/Footer";
import ProductsList from "./components/pages/products list/ProductsList";
import Produt from "./components/pages/product/Product";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/pages/contact us/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import AuthPage from "./components/pages/auth/Auth";



function App() {
  return (
    // <Router>
      <div className="App">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<ProductsList products={products} />} />
          <Route path="/products/:id" element={<Produt products={products} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;