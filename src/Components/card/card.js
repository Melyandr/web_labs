
import left_photo from "../../photos/4.jpg";
import central_photo from "../../photos/5.jpg";
import right_photo from "../../photos/6.jpg";
import general from "../General/general";

// const Card = ({ pencilcase}) => (
//     <div className="cards">
//         <div className="card-block">
//             <img src={photo} alt="pencilcase" className="pencilcase_three_photos" />
//         </div>
//         <p className="titles">{title}</p>
//         <p className="card-text">{text}</p>
//     </div>
// );
import React from "react";

const Card = ({ photo, title, text }) => (
    <div className="cards">
        <div className="card-block">
            <img src={photo} alt="pencilcase" className="pencilcase_three_photos" />
        </div>
        <p className="titles">{title}</p>
        <p className="card-text">{text}</p>
    </div>
);

export default Card;


