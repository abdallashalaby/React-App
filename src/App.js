import React from "react";
import Nav from "./Nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import First from "./First";
import Second from "./Second";
import Footer from "./Footer";
import End from "./End";
function App() {
  return (
	  <div>
	<BrowserRouter>
    <Nav />
	<Routes>
	<Route path="#" element={<App />}/>
	    </Routes>
	    </BrowserRouter>
	    <First />
	    <br />
	    <Second />
	    <Footer />
	    <End />
	    
    </div>

    )
}

export default App;
