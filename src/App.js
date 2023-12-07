import {
    BrowserRouter ,
    Routes,
    Route,
    Link, Switch,
    Outlet

} from "react-router-dom";

import React,{useState,useEffect} from "react";
import { Provider } from 'react-redux';
import store from '../src/reducers_basket/store.js';

import './App.css';
import './Components/Navigation/navigationcss.css'
import Navigation from "./Components/Navigation/navigation.js";



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
    const [pencilCases2, setPencilcase]= useState([])
    // [
    //     { id: 1, photo: left_photo, title: "Kite", text: "A compact and versatile dfdfdfdbfd", price: 30, size: 1 },
    //     { id: 2, photo: central_photo, title: "Nike", text: "Pencil cases are perfect  fddgerge gggfb hrthrhr", price: 40, size: 8 },
    //     { id: 3, photo: right_photo, title: "Brave", text: "These cases often use for office workhrth trhr", price: 50, size: 3 },
    //     { id: 4, photo: left_photo, title: "Brave", text: "A compact and versatileergege 5tgeger54 trtrhrthrt", price: 70, size: 4 },
    // ];
    // useEffect(() => {
    //     // Приклад виклику функції отримання всіх олівцевих коробок
    //     const fetchAllPencilcases = async () => {
    //         try {
    //             const allPencilcases = await getAllPencilcases();
    //             setPencilcase(allPencilcases)
    //             console.log('All pencilcases:', allPencilcases);

    //         } catch (error) {
    //             console.error('Error fetching all pencilcases:', error);
    //         }
    //     };

    //     // Виклик функції отримання всіх олівцевих коробок
    //     fetchAllPencilcases();
    // }, []);


  //
  // return (
  //
  //     <BrowserRouter>
  //         <Routes>
  //             <Route path="/" element={<Navigation/>}>
  //                 <Route index element={<Home />} />
  //                 <Route path="catalog" element={<Catalog />} />
  //                 <Route path="/item/:id" element={<Item/>} />
  //                 <Route path="card" element={<Card />} />
  //
  //             </Route>
  //         </Routes>
  //     </BrowserRouter>
  // );
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="/item/:id" element={<Item />} />
                        <Route path="card" element={<Card />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
