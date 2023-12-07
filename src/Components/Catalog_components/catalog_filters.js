//
//
// import React, { useState } from "react";
// import Select from "./Select";
// import "./catalog_filters.css";
//
// const Catalog_filters = ({ applyFilter }) => {
//     const [brand, setBrand] = useState("all");
//     const [cat, setCat] = useState("All");
//     const [size, setSize] = useState("All");
//
//     const handleBrandChange = (e) => {
//         setBrand(e.target.value);
//     };
//
//     const handlePriceChange = (e) => {
//         setCat(e.target.value);
//     };
//
//     const handleSizeChange = (e) => {
//         setSize(e.target.value);
//     };
//
//     const handleApplyFilter = () => {
//         applyFilter({ brand, cat, size });
//     };
//
//     const brandOptions = [
//         { value: "All", label: "All" },
//         { value: "Nike", label: "Nike" },
//         { value: "Kite", label: "Kite" },
//         { value: "Brave", label: "Brave" },
//     ];
//
//     const priceOptions = [
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
//             options: brandOptions,
//             onChange: handlePriceChange,
//         },
//
//         {
//             value: brand,
//             options: priceOptions,
//             onChange: handleBrandChange,
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
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("all");
    const [price, setPrice] = useState("all");
    const [size, setSize] = useState("all");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleApplyFilter = () => {
        applyFilter({ title, price, size, brand});
    };

    const brandOptions = [
        { value: "all", label: "All" },
        { value: "Nike", label: "Nike" },
        { value: "Kite", label: "Kite" },
        { value: "Brave", label: "Brave" },
    ];

    const priceOptions = [
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
            value: brand,
            options: brandOptions,
            onChange: handleBrandChange,
        },

        {
            value: price,
            options: priceOptions,
            onChange: handlePriceChange,
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
                    
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    value={title}
                    onChange={handleTitleChange}
                />

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
