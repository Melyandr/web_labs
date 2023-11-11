import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Catalog_filters from '../Components/Catalog_components/catalog_filters.js'
import '../Components/Catalog_components/catalog_filters.css'
import Catalog_cards from "../Components/Catalog_components/catalog_cards";
import Card from '../Components/card/card'

import Footer from "../Components/Footer/Footer.js";
import '../Components/Footer/Footer.css'
const Catalog =()=>(

    <div>
    <Catalog_filters/>
        <Catalog_cards/>
        <Footer/>
    </div>
)

export default Catalog;