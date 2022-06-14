import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return ( 
    <>
    <Link to="/">go to home</Link>
      <br></br>
    <Link to="/auth">Login</Link>
    <div>
      
      Home
      </div>
    </>
  );
};

export default Home;
