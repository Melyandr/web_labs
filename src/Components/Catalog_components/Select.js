// import React from "react";
//
// const Select = ({ value, onChange, options }) => (
//     <select className="select_filter" value={value} onChange={onChange}>
//         {options.map((option) => (
//             <option key={option.value} value={option.value}>
//                 {option.label}
//             </option>
//         ))}
//     </select>
// );
//
// export default Select;
// Select.js
import React from "react";

const Select = ({ value, onChange, options }) => (
    <select className="select_filter" value={value} onChange={onChange}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

export default Select;
