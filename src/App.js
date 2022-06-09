import "./custom.scss";
import "./App.css"
import NavBar from "./components/navbar/NavBar.js";
import Home from './components/pages/home/Home.js';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
