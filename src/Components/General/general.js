// import React from "react";
// import left_photo from "../../photos/4.jpg";
// import central_photo from "../../photos/5.jpg";
// import right_photo from "../../photos/6.jpg";
// import Card from "../card/card.js";
//
// const pencilCases = [
//     { photo: left_photo, title: "Brave Kite", text: "A compact and versatile" },
//     { photo: central_photo, title: "Mouse and duck", text: "Pencil cases are perfect" },
//     { photo: right_photo, title: "Axdent", text: "These cases often" },
//
// ];
//
// const General = () => (
//     <section>
//         <div className="About-pencilcases">
//             {pencilCases.map((pencilCase) => (
//                 <Card key={pencilCase.id} {...pencilCase} />
//             ))}
//         </div>
//     </section>
// );
//
// export default General;


import React from "react";
import Card from "../card/card.js";
import left_photo from "../../photos/4.jpg";
import central_photo from "../../photos/5.jpg";
import right_photo from "../../photos/6.jpg";

const pencilCases = [
    { photo: left_photo, title: "Brave Kite", text: "A compact and versatile" },
    { photo: central_photo, title: "Mouse and duck", text: "Pencil cases are perfect" },
    { photo: right_photo, title: "Axdent", text: "These cases often" },
    { photo: left_photo, title: "Brave Kite", text: "A compact and versatile" },
    { photo: right_photo, title: "Mouse", text: "A compact and versatile" },
    { photo: central_photo, title: "Axdent2", text: "A compact and versatile" },
];

const General = ({ displayedElements }) => (
    <section>
        <div className="About-pencilcases">
            {pencilCases.slice(0, displayedElements).map((pencilCase) => (
                <Card key={pencilCase.id} {...pencilCase} />
            ))}
        </div>
    </section>
);

export default General;