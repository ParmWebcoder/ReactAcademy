import 'bootstrap/dist/css/bootstrap.min.css';
//import { Routes, Route ,Switch} from "react-router-dom"

import { BrowserRouter as Router,  Routes,Switch, Route } from "react-router-dom";

import About from "./pages/About.js";
import './mainScss/MainStyle.css';
// import './App.css';
import NavBar from './Components/TopHeader.js';
import SliderMain from './Components/sliderMain.js';
import MainSec from  './Components/MainSec.js';

import Footer from './Components/Footer.js';

export default function App() {
  return (
<>

    <div id="Main" className="App">
 
  
      <NavBar/>
<Router> 

<Switch>
      <Routes>
        
        
         {/* <Route exact path="/" component={MainSec} /> */}
           <Route path="about" element={ <About/> } />
      
      </Routes>
      </Switch>
    </Router>
     

      
      <SliderMain/>
      <MainSec/>
     
      <Footer/>
     
    </div>
</>

  );
}

// export default App;
