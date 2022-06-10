import React from "react";
import "./End.css";
import logo from "./Images/logo.png";

function End(){
	return(
	<div className="End">
	<div className="lt">
	<img src={logo} />
	<p>Best solution for your setup buisness</p>
	</div>
	<div className="links">
	<span><b>Company</b></span><br /><br />
	<a href="#">About Us</a>
	<a href="#">Core Services</a>
	<a href="#">Refund Policy</a>
	<a href="#">FAQ's</a>
	<a href="#">Reviews</a>
	</div>
	<div className="links">
	<span><b>Support</b></span><br /><br />
	<a href="#">Services</a>
	<a href="#">Suport</a>
	<a href="#">Privacy Policy</a>
	<a href="#">FAQ's</a>
	<a href="#">Contact</a>
	</div>
	<div className="links">
	<span><b>Useful Links</b></span><br /><br />
	<a href="#">Privacy Policy</a>
	<a href="#">Return Policy</a>
	<a href="#">Terms & Conditions</a>
	<a href="#">How it Works?</a>
	<a href="#">Contact Us</a>
	</div>
	<div className="links">
	<span><b>Newsletter</b></span><br /><br />
	<p>Best solution for your it startup buisness</p>
	</div>
	</div>
	)
}

export default End;
