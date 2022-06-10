import React from "react";
import one from "./Images/user1.jpg";
import two from "./Images/user2.jpg";
import three from "./Images/user3.jpg";
import four from "./Images/user4.jpg";
import google from "./Images/play-store.png";
import App from "./Images/apple-store.png";
import banner from "./Images/banner-2.png";
import "./first.css"
function First(){
	return(
		<div className="First">
		<img src={banner} id="banner" />
		<span id="spn">#Get Your 14 Days Free Trial</span>
		<h1>Manage All Of Your <br />Stuff Using A Pakap</h1>
		<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. id thoudunt effend odlo virrav diam allqiet dpmec again</p>
		<div className="users">
		<img src={one} />
		<img src={two} />
		<img src={three} />
		<img src={four} />
		<span>4k+ used this App</span>
		</div>
		<button className="store"><img src={App} />Download on the Apple Store</button>
		<button className="store"><img src={google} />Download on Google Play</button>

		</div>
	)
}


export default First;
