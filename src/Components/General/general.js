




//     <section>
//         <div className="About-pencilcases">
//             <Card
//                 photo={left_photo}
//                 title="Brave Kite"
//                 text="A pencil case is a compact and versatile storage accessory designed to keep your writing and drawing tools neatly organized. Typically made of durable materials such as fabric, leather, or plastic"
//             />
//             <Card
//                 photo={central_photo}
//                 title="Mouse and duck"
//                 text="Pencil cases are perfect for students, artists, professionals, and anyone who needs a portable and organized solution for their stationery."
//             />
//             <Card
//                 photo={right_photo}
//                 title="Axdent"
//                 text="These cases often feature zippers, buttons, or snaps to securely enclose your writing supplies, preventing them from falling out or getting damaged. Many pencil cases also include internal compartments and pockets"
//             />
//
//         </div>
//
//
// </section>


// const General = () => (
//     <section>
//         <div className="About-pencilcases">
//             {pencilcaseData.map((data, index) => (
//                 <Card
//                     id={index}
//                     photo={data.photo}
//                     title={data.title}
//                     text={data.text}
//                 />
//             ))}
//
//         </div>
//     </section>
//
//
//
// );

import React from "react";
import left_photo from "../../photos/4.jpg";
import central_photo from "../../photos/5.jpg";
import right_photo from "../../photos/6.jpg";
import Card from "../card/card.js";

const pencilCases = [
    { photo: left_photo, title: "Brave Kite", text: "A compact and versatile" },
    { photo: central_photo, title: "Mouse and duck", text: "Pencil cases are perfect" },
    { photo: right_photo, title: "Axdent", text: "These cases often" },

];

const General = () => (
    <section>
        <div className="About-pencilcases">
            {pencilCases.map((pencilCase) => (
                <Card key={pencilCase.title} {...pencilCase} />
            ))}
        </div>
    </section>
);

export default General;
