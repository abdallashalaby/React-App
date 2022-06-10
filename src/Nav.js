import React from "react";
import { Link } from 'react-router-dom';
import logo from "./Images/black-logo.png";
import "./Nav.css";
function Nav(){
return (
        <div className="Nav">
                <img src={logo} alt="logo" />
                <div className="links">
                <Link to="#"><span>Home</span></Link>                                       
                <Link to="#"><span>About Us</span></Link>                                       
                <Link to="#"><span>Pages</span></Link>                                       
                <Link to="#"><span>Shop</span></Link>                                       
                <Link to="#"><span>Blog</span></Link>                                       
                <Link to="#"><span>Contact</span></Link>                                       
        </div>
        <button id="GS">Get Started</button>
        </div>
)
}

export default Nav;
