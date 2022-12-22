import 'bootstrap/dist/css/bootstrap.min.css';


import './mainScss/MainStyle.css';
// import './App.css';
import NavBar from './Components/TopHeader.js';
import SliderMain from './Components/sliderMain.js';
import MainSec from  './Components/MainSec.js';



function App() {
  return (
<>

    <div id="Main" className="App">
      <NavBar/>
      <SliderMain/>
      <MainSec/>
     
      
    </div>
</>

  );
}

export default App;
