// import React from "react";
//
// const Button = () => (
//
//     <button className="button_view_more" type="button">View more</button>
//
//
//
// )
// export default Button;
// Button.js
// import React from "react";
//
// const Button = ({ onClick }) => (
//     <button className="button_view_more" type="button" onClick={onClick}>
//         View more
//     </button>
// );
//
// export default Button;

// Button.js
import React from "react";

const Button = ({ onClick, isViewMore }) => (
    <button className="button_view_more" type="button" onClick={onClick}>
        {isViewMore ? "View more" : "Less"}
    </button>
);

export default Button;
