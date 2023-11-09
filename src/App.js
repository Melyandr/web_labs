
import './App.css';
import './Components/Navigation/navigationcss.css'
import Navigation from "./Components/Navigation/navigation.js";

import Header from "./Components/Header/header.js";
import './Components/Header/header.css'

import General from "./Components/General/general.js";
import './Components/General/general.css'

import Footer from "./Components/Footer/Footer.js";
import './Components/Footer/Footer.css'

import Button from "./Components/button/button.js";
import './Components/button/button.css'

function App() {
  return (
      <div>
      <Navigation/>
          <Header/>
          <General/>
          <Button/>
          <Footer/>
      </div>
  );
}

export default App;
