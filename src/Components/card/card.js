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