import React from "react";


const card_with_price=({ photo, title, text ,price}) =>(

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
        <button className="Card_button">View More</button>
    </div>

)
export default card_with_price;