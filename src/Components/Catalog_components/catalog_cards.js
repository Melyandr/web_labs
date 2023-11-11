

import React from "react";
import left_photo from "../../photos/3.jpg";
import central_photo from "../../photos/5.jpg";
import right_photo from "../../photos/6.jpg";
import Сard_with_price from "./card_with_price";
import '../Catalog_components/catalog_cards.css'

const pencilCases2 = [
    { photo: left_photo, title: "Brave Kite", text: "A compact and versatile",price:30 },
    { photo: central_photo, title: "Mouse and duck", text: "Pencil cases are perfect",price:40 },
    { photo: right_photo, title: "Axdent", text: "These cases often use for office work",price:50 },
    { photo: left_photo, title: "Brave Kite", text: "A compact and versatile",price:70 },
];
const catalog_cards = () => (
    <section>
        <div className="About-pencilcases-catalog">
            {pencilCases2.map((pencilCase) => (
                <Сard_with_price
                    key={pencilCase.title}
                    photo={pencilCase.photo}
                    title={pencilCase.title}
                    text={pencilCase.text}
                    price={pencilCase.price}
                />
            ))}
        </div>
    </section>
);



export default catalog_cards;