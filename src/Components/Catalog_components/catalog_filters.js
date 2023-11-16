//
//
// import React, { useState } from "react";
// import Select from "./Select";
// import "./catalog_filters.css";
//
// const Catalog_filters = ({ applyFilter }) => {
//     const [sorts, setSorts] = useState("all");
//     const [cat, setCat] = useState("All");
//     const [size, setSize] = useState("All");
//
//     const handleSortingChange = (e) => {
//         setSorts(e.target.value);
//     };
//
//     const handleFilteringNameChange = (e) => {
//         setCat(e.target.value);
//     };
//
//     const handleSizeChange = (e) => {
//         setSize(e.target.value);
//     };
//
//     const handleApplyFilter = () => {
//         applyFilter({ sorts, cat, size });
//     };
//
//     const catOptions = [
//         { value: "All", label: "All" },
//         { value: "Nike", label: "Nike" },
//         { value: "Kite", label: "Kite" },
//         { value: "Brave", label: "Brave" },
//     ];
//
//     const sortOptions = [
//         { value: "all", label: "All" },
//         { value: "cheap", label: "Cheap" },
//         { value: "expensive", label: "Expensive" },
//     ];
//
//     const sizeOptions = [
//         { value: "all", label: "All" },
//         { value: "big", label: "Big" },
//         { value: "small", label: "Small" },
//     ];
//
//     let arr_select = [
//         {
//             value: cat,
//             options: catOptions,
//             onChange: handleFilteringNameChange,
//         },
//
//         {
//             value: sorts,
//             options: sortOptions,
//             onChange: handleSortingChange,
//         },
//
//         {
//             value: size,
//             options: sizeOptions,
//             onChange: handleSizeChange,
//         },
//     ]
//
//
//     return (
//         <section className="filter_section">
//             <div className="filters_with_button">
//                 <div className="three_filters">
//                     {arr_select.map((select, index) => (
//                         <div className="select_filter" key={index}>
//                             <Select
//                                 value={select.value}
//                                 onChange={select.onChange}
//                                 options={select.options}
//                             />
//                         </div>
//                     ))}
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
// Catalog_filters.js
import React, { useState } from "react";
import Select from "./Select";
import "./catalog_filters.css";

const Catalog_filters = ({ applyFilter }) => {
    const [sorts, setSorts] = useState("all");
    const [cat, setCat] = useState("All");
    const [size, setSize] = useState("all");

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
    ];

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
