import React,{ useEffect, useState } from "react";


import Catalog_filters from '../Components/Catalog_components/catalog_filters.js'
import '../Components/Catalog_components/catalog_filters.css'
import Catalog_cards from "../Components/Catalog_components/catalog_cards";
import Card from '../Components/card/card'

import Footer from "../Components/Footer/Footer.js";
import '../Components/Footer/Footer.css'
const Catalog =({pencilCases2})=> {

    // <div>
    // <Catalog_filters/>
    //     <Catalog_cards/>
    //     <Footer/>
    // </div>
    const [filters, setFilters] = useState({sorts: "all", cat: "All", size: "all"});

    const handleApplyFilter = (newFilters) => {
        setFilters(newFilters);
    };


    return (
        <div>
            <Catalog_filters applyFilter={handleApplyFilter}/>
            <Catalog_cards pencilCases2={pencilCases2} filters={filters}/>
            <Footer/>
        </div>
    );
}

export default Catalog;