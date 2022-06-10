import React from "react";
import s1  from "./Images/screenshots1.png";
import s2 from "./Images/screenshots2.png";
import s3 from "./Images/screenshots3.png";
import s4 from "./Images/screenshots4.png";
import "./second.css";
function Second(){
	return(
	<div className="screenshots">
		<p id="spn">APP SCREENS</p>
		<h1>Beautifully Crafted All App<br />Screenshots</h1>
		<div className="screens">
		<img src={s1} />
		<img src={s2} />
		<img src={s3} />
		<img src={s4} />
		</div>
	</div>
	)
}

export default Second;
