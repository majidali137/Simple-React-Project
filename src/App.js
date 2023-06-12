import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {

  return (
<>
    <NavBar/>
    <Routes>
    <Route path="/">
      <Route index element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
    </Route>
  </Routes>  

     <Footer/>
</>
  );
}

export default App;
