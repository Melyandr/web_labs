// import React from "react";
//
// const Catalog_filters = () => (
//     <section className="filter_section">
//
//     <div className="filters_with_button">
//     <div className="filter-panel">
//         <div className="filter-button">
//             Фільтр 1
//             <button className="dropdown-button">▼</button>
//         </div>
//         <div className="filter-button">
//             Фільтр 2
//             <button className="dropdown-button">▼</button>
//         </div>
//         <div className="filter-button">
//             Фільтр 3
//             <button className="dropdown-button">▼</button>
//         </div>
//     </div>
//
//     <div>
//         <button className="button_apply">Apply</button>
//     </div>
//     </div>
//         <hr />
//         </section>
// );
//
// export default Catalog_filters;
//










// import React, { useState } from "react";
// import "./catalog_filters.css"

// const Catalog_filters = ({ applyFilter }) => {
//     const [sorts, setSorts] = useState("all");
//     const [cat, setCat] = useState("All");
//     const [size, setSize]= useState("All");
//
//     const handleSortingChange = (e) => {
//         setSorts(e.target.value);
//     };
//
//     const handleFilteringNameChange = (e) => {
//         setCat(e.target.value);
//     };
//     const handleSizeChange = (e) => {
//         setSize(e.target.value);
//     };
//     const handleApplyFilter = () => {
//         applyFilter({ sorts, cat, size});
//     };
//
//     return (
//         <section className="filter_section">
//             <div className="filters_with_button">
//                 <div className="three_filters">
//                 <div className="select_filter">
//                     <select className="select_filter" value={cat} onChange={handleFilteringNameChange}>
//                         <option value="All">All</option>
//                         <option value="Nike">Nike</option>
//                         <option value="Kite">Kite</option>
//                         <option value="Brave">Brave</option>
//                     </select>
//                 </div>
//
//                 {/* Sorting */}
//                 <div className="select_filter">
//                     <select className="select_filter" value={sorts} onChange={handleSortingChange}>
//                         <option value="all">All</option>
//                         <option value="cheap">Cheap</option>
//                         <option value="expensive">Expensive</option>
//                     </select>
//                 </div>
//
//                 {/* Size */}
//                 <div className="select_filter">
//                     <select className="select_filter" value={size} onChange={handleSizeChange}>
//                         <option value="all">All</option>
//                         <option value="big">big</option>
//                         <option value="small">small</option>
//                     </select>
//                 </div>
//                 </div>
//                 <div>
//                     <button className="button_apply" onClick={handleApplyFilter}>
//                         Apply
//                     </button>
//                 </div>
//             </div>
//             <hr />
//         </section>
//     );
// };
//
// export default Catalog_filters;

import React, { useState } from "react";
import Select from "./Select";
import "./catalog_filters.css";

const Catalog_filters = ({ applyFilter }) => {
    const [sorts, setSorts] = useState("all");
    const [cat, setCat] = useState("All");
    const [size, setSize] = useState("All");

    const handleSortingChange = (e) => {
        setSorts(e.target.value);
    };

    const handleFilteringNameChange = (e) => {
        setCat(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleApplyFilter = () => {
        applyFilter({ sorts, cat, size });
    };

    const catOptions = [
        { value: "All", label: "All" },
        { value: "Nike", label: "Nike" },
        { value: "Kite", label: "Kite" },
        { value: "Brave", label: "Brave" },
    ];

    const sortOptions = [
        { value: "all", label: "All" },
        { value: "cheap", label: "Cheap" },
        { value: "expensive", label: "Expensive" },
    ];

    const sizeOptions = [
        { value: "all", label: "All" },
        { value: "big", label: "Big" },
        { value: "small", label: "Small" },
    ];

    let arr_select = [
        {
            value: cat,
            options: catOptions,
            onChange: handleFilteringNameChange,
        },

        {
            value: sorts,
            options: sortOptions,
            onChange: handleSortingChange,
        },

        {
            value: size,
            options: sizeOptions,
            onChange: handleSizeChange,
        },
    ]

//     return (
//         <section className="filter_section">
//             <div className="filters_with_button">
//                 <div className="three_filters">
//                     {/* Brand */}
//                     <div className="select_filter">
//                         <Select
//                             value={cat}
//                             onChange={handleFilteringNameChange}
//                             options={catOptions}
//                         />
//                     </div>
//
//                     {/* Sorting */}
//                     <div className="select_filter">
//                         <Select
//                             value={sorts}
//                             onChange={handleSortingChange}
//                             options={sortOptions}
//                         />
//                     </div>
//
//                     {/* Size */}
//                     <div className="select_filter">
//                         <Select
//                             value={size}
//                             onChange={handleSizeChange}
//                             options={sizeOptions}
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <button className="button_apply" onClick={handleApplyFilter}>
//                         Apply
//                     </button>
//                 </div>
//             </div>
//             <hr />
//         </section>
//     );
// };
    return (
        <section className="filter_section">
            <div className="filters_with_button">
                <div className="three_filters">
                    {arr_select.map((select, index) => (
                        <div className="select_filter" key={index}>
                            <Select
                                value={select.value}
                                onChange={select.onChange}
                                options={select.options}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <button className="button_apply" onClick={handleApplyFilter}>
                        Apply
                    </button>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default Catalog_filters;
