import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="position-relative d-flex justify-content-center ">
      <nav className="d-flex justify-content-between mt-3 align-items-center px-4 position-fixed">
        <div className="LogoContainer">
         <Link to='/' > <img src="/logo.svg" alt="" className="img-fluid" /></Link>
        </div>

        <div className="NavTextHolder">
          <ul className="d-flex align-items-center m-0 h-5">
            
            <li>
              <Link to='/'>Home</Link> 
              </li>
            

            
            <li>
              <Link to='/Todo'>Todo List</Link>
              </li>
            
            <li>
              <Link to='/Country'>Contries Details</Link>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
    
}

export default Nav;
