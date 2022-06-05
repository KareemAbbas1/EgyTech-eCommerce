import "./custom.scss";
import "./App.css"
import NavBar from "./components/navbar/NavBar.js";
import Home from './components/pages/home/Home.js';
import ProductsList from "./components/pages/products list/ProductsList";

function App() {
  return (
    <div className="App">
   
    <NavBar />
     <Home />
    </div>
  );
}

export default App;
