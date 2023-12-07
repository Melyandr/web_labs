import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import Preloader from "../../Preloader/preloader.js"
import "../../Preloader/preloadeer.css"
//
// const card_with_price=({ id,photo, title, text ,price, size}) => {
//     console.log(id);
//     return (
//         <div className="cards_catalog">
//
//             <div className="card-block_price">
//                 <img src={photo} alt="pencilcase" className="pencilcase_four_photos"/>
//
//             </div>
//             <p className="titles">{title}</p>
//             <p className="card-text">{text}</p>
//             <div className="price_with_value">
//                 <p className="price_near_value">Price:</p>
//                 <p className="card-price">${price}</p>
//             </div>
//             <div className="price_with_value">
//                 <p className="price_near_value">Size:</p>
//                 <p className="card-price">{size}</p>
//             </div>
//             <Link to={`/item/${id}`} className="Card_button">
//                 View More
//             </Link>
//         </div>
//
//     )
// }
// export default card_with_price;
const CardWithPrice = ({ id, photo, title, text, price, size }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="cards_catalog">
            <div className="card-block_price">
                <img src={photo} alt="pencilcase" className="pencilcase_four_photos" />
            </div>
            <p className="titles">{title}</p>
            <p className="card-text">{text}</p>
            <div className="price_with_value">
                <p className="price_near_value">Price:</p>
                <p className="card-price">${price}</p>
            </div>
            <div className="price_with_value">
                <p className="price_near_value">Size:</p>
                <p className="card-price">{size}</p>
            </div>
            <Link to={`/item/${id}`} className="Card_button">
                View More
            </Link>
        </div>
    );
};

export default CardWithPrice;