import {
    BrowserRouter ,
    Routes,
    Route,
    Link, Switch,
    Outlet

} from "react-router-dom";


import React,{useState} from "react";

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


import Item from "./pages/Item.js"
import left_photo from "./photos/3.jpg";
import central_photo from "./photos/5.jpg";
import right_photo from "./photos/6.jpg";


function App() {
    const pencilCases2 = [
        { id: 1, photo: left_photo, title: "Kite", text: "A compact and versatile dfdfdfdbfd", price: 30, size: 1 },
        { id: 2, photo: central_photo, title: "Nike", text: "Pencil cases are perfect  fddgerge gggfb hrthrhr", price: 40, size: 8 },
        { id: 3, photo: right_photo, title: "Brave", text: "These cases often use for office workhrth trhr", price: 50, size: 3 },
        { id: 4, photo: left_photo, title: "Brave", text: "A compact and versatileergege 5tgeger54 trtrhrthrt", price: 70, size: 4 },
    ];

    const [searchFilteredCases, setSearchFilteredCases] = useState(pencilCases2);

    const [searchInput, setSearchInput] = useState("");

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        console.log(e.target.value)
        setSearchFilteredCases(pencilCases2.filter(item => {
            return item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
        }));
        console.log(searchFilteredCases)
    };

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
              <Route path="/" element={<Navigation searchInputValue={searchInput} setSearchInput={handleSearchInputChange}/>}>
                  <Route index element={<Home />} />
                  <Route path="catalog" element={<Catalog pencilCases2={searchFilteredCases} />} />
                  <Route path="/item/:id" element={<Item pencilCases2={pencilCases2}/>} />
                  <Route path="card" element={<Card />} />

              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
