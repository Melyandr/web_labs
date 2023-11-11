import {
    BrowserRouter ,
    Routes,
    Route,
    Link, Switch,
    Outlet

} from "react-router-dom";


import './App.css';
import './Components/Navigation/navigationcss.css'
import Navigation from "./Components/Navigation/navigation.js";

// import Header from "./Components/Header/header.js";
// import './Components/Header/header.css'
//
// import General from "./Components/General/general.js";
// import './Components/General/general.css'
//
// import Footer from "./Components/Footer/Footer.js";
// import './Components/Footer/Footer.css'

import Button from "./Components/button/button.js";
import './Components/button/button.css'
import Home from "./pages/Home";

import Card from "./pages/Card";
import Catalog from "./pages/Catalog";

import './Components/Catalog_components/catalog_filters.css'


function App() {
  return (
      // <div>
      // <Navigation/>
      //     <Header/>
      //     <General/>
      //     <Button/>
      //     <Footer/>
      // </div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigation />}>
                  <Route index element={<Home />} />
                  <Route path="catalog" element={<Catalog />} />
                  <Route path="card" element={<Card />} />

              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
