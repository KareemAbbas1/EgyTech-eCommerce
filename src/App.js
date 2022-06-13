import "./custom.scss";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
//import NavBar from "./components/NavBar";

import Home from "./components/pages/home/Home";
import AuthPage from "./components/pages/auth/Auth";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<AuthPage />} />
      </Routes>
        
      {/*<NavBar />

  <h1>Hello World</h1>*/}
     
    </div>
  );
}

export default App;
