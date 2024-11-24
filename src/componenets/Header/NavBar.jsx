import React from "react";
import "../Header/navbar.css";
import { Link } from "react-router-dom";



function NavBar() {
  

  return (
  
      <nav className="nav-bar">
      <Link className="home" to="/">
        <h1 className="nav-title">Movie Project </h1>
        </Link>  
      </nav>
   
  );
}

export default NavBar;
