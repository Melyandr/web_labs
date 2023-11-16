// import React, { useState, useEffect } from "react";
// import left_photo from "../../photos/3.jpg";
// import central_photo from "../../photos/5.jpg";
// import right_photo from "../../photos/6.jpg";
// import Сard_with_price from "./card_with_price";
// import "../Catalog_components/catalog_cards.css";
//
//
//
// const Catalog_cards = ({ filters }) => {
//     const pencilCases2 = [
//         { id: 1, photo: left_photo, title: "Kite", text: "A compact and versatile", price: 30, size: 1 },
//         { id: 2, photo: central_photo, title: "Nike", text: "Pencil cases are perfect", price: 40, size: 8 },
//         { id: 3, photo: right_photo, title: "Brave", text: "These cases often use for office work", price: 50, size: 3 },
//         { id: 4, photo: left_photo, title: "Brave", text: "A compact and versatile", price: 70, size: 4 },
//     ];
//
//
//
//     const [filteredPencilCases, setFilteredPencilCases ] = useState(pencilCases2);
//     const [searchInput, setSearchInput]= useState("")
//     useEffect(() => {
//         const searchItems = pencilCases2.filter((item) => {
//             return (
//                 searchInput === "" || item.title.toLowerCase().includes(searchInput.toLowerCase())
//             );
//         });
//
//         setSearchInput(searchItems);
//     }, [filters, searchInput]);
//
//
//
//     useEffect(() => {
//         const filteredItems = searchItems.filter((item) => {
//             return (
//                 (filters.cat === "All" || item.title === filters.cat) &&
//                 (filters.sorts === "all" ||
//                     (filters.sorts === "cheap" && item.price < 50) ||
//                     (filters.sorts === "expensive" && item.price >= 50)) &&
//                 (filters.size === "all" ||
//                     ( filters.size==="big"&& item.size>2 ) ||
//                     (filters.size==="small" && item.size<=2))
//
//             );
//         });
//
//         setFilteredPencilCases(filteredItems);
//     }, [filters,filteredPencilCases]);
//
//     return (
//         <section>
//             <div className="About-pencilcases-catalog">
//                 {filteredPencilCases.map((pencilCase) => (
//                     <Сard_with_price
//                         key={pencilCase.id}
//                         photo={pencilCase.photo}
//                         title={pencilCase.title}
//                         text={pencilCase.text}
//                         price={pencilCase.price}
//                         size={pencilCase.size}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };
//
// export default Catalog_cards;




// import React, { useState, useEffect } from "react";
// import left_photo from "../../photos/3.jpg";
// import central_photo from "../../photos/5.jpg";
// import right_photo from "../../photos/6.jpg";
// import Сard_with_price from "./card_with_price";
// import "../Catalog_components/catalog_cards.css";
//
// const Catalog_cards = ({ filters }) => {
//     const pencilCases2 = [
//         { id: 1, photo: left_photo, title: "Kite", text: "A compact and versatile", price: 30, size: 1 },
//         { id: 2, photo: central_photo, title: "Nike", text: "Pencil cases are perfect", price: 40, size: 8 },
//         { id: 3, photo: right_photo, title: "Brave", text: "These cases often use for office work", price: 50, size: 3 },
//         { id: 4, photo: left_photo, title: "Brave", text: "A compact and versatile", price: 70, size: 4 },
//     ];
//
//     const [filteredPencilCases, setFilteredPencilCases] = useState(pencilCases2);
//     const [searchInput, setSearchInput] = useState("");
//     const [searchItems, setSearchItems] = useState([]);
//
//     useEffect(() => {
//         const items = pencilCases2.filter((item) => {
//             return searchInput === "" || item.title.toLowerCase().includes(searchInput.toLowerCase());
//         });
//
//         setSearchItems(items);
//     }, [searchInput]);
//
//     useEffect(() => {
//         const filteredItems = searchItems.filter((item) => {
//             return (
//                 (filters.cat === "All" || item.title === filters.cat) &&
//                 (filters.sorts === "all" ||
//                     (filters.sorts === "cheap" && item.price < 50) ||
//                     (filters.sorts === "expensive" && item.price >= 50)) &&
//                 (filters.size === "all" ||
//                     (filters.size === "big" && item.size > 2) ||
//                     (filters.size === "small" && item.size <= 2))
//             );
//         });
//
//         setFilteredPencilCases(filteredItems);
//     }, [filters, searchItems]);
//
//     return (
//         <section>
//             <div className="About-pencilcases-catalog">
//                 {filteredPencilCases.map((pencilCase) => (
//                     <Сard_with_price
//                         key={pencilCase.id}
//                         photo={pencilCase.photo}
//                         title={pencilCase.title}
//                         text={pencilCase.text}
//                         price={pencilCase.price}
//                         size={pencilCase.size}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };
//
// export default Catalog_cards;


//
// import React, { useState, useEffect } from "react";
// import left_photo from "../../photos/3.jpg";
// import central_photo from "../../photos/5.jpg";
// import right_photo from "../../photos/6.jpg";
// import Сard_with_price from "./card_with_price";
// import "../Catalog_components/catalog_cards.css";
//
// const Catalog_cards = ({ filters }) => {
//     const pencilCases2 = [
//         { id: 1, photo: left_photo, title: "Kite", text: "A compact and versatile", price: 30, size: 1 },
//         { id: 2, photo: central_photo, title: "Nike", text: "Pencil cases are perfect", price: 40, size: 8 },
//         { id: 3, photo: right_photo, title: "Brave", text: "These cases often use for office work", price: 50, size: 3 },
//         { id: 4, photo: left_photo, title: "Brave", text: "A compact and versatile", price: 70, size: 4 },
//     ];
//
//     const [filteredPencilCases, setFilteredPencilCases] = useState(pencilCases2);
//
//
//     useEffect(() => {
//         const filteredItems = pencilCases2.filter((item) => {
//             return (
//
//                 (filters.cat === "All" || item.title === filters.cat) &&
//                 (filters.sorts === "all" ||
//                     (filters.sorts === "cheap" && item.price < 50) ||
//                     (filters.sorts === "expensive" && item.price >= 50)) &&
//                 (filters.size === "all" ||
//                     (filters.size === "big" && item.size > 2) ||
//                     (filters.size === "small" && item.size <= 2))
//             );
//         });
//
//         setFilteredPencilCases(filteredItems);
//     }, [filters,filteredPencilCases ]);
//
//     return (
//         <section>
//             <div className="About-pencilcases-catalog">
//                 {filteredPencilCases.map((pencilCase) => (
//                     <Сard_with_price
//                         key={pencilCase.id}
//                         photo={pencilCase.photo}
//                         title={pencilCase.title}
//                         text={pencilCase.text}
//                         price={pencilCase.price}
//                         size={pencilCase.size}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };
//
// export default Catalog_cards;









import React, { useState, useEffect } from "react";
import left_photo from "../../photos/3.jpg";
import central_photo from "../../photos/5.jpg";
import right_photo from "../../photos/6.jpg";
import CardWithPrice from "./card_with_price";
import "../Catalog_components/catalog_cards.css";

const CatalogCards = ({ searchInput, filters ,pencilCases2}) => {
    // const pencilCases2 = [
    //     { id: 1, photo: left_photo, title: "Kite", text: "A compact and versatile dfdfdfdbfd dssferfwefw", price: 30, size: 1 },
    //     { id: 2, photo: central_photo, title: "Nike", text: "Pencil cases are perfect  fddgerge gggfb hrthrhr", price: 40, size: 8 },
    //     { id: 3, photo: right_photo, title: "Brave", text: "These cases often use for office workhrg", price: 50, size: 3 },
    //     { id: 4, photo: left_photo, title: "Brave", text: "A compact and versatileergege 5tgeger54 trtrhrthrt", price: 70, size: 4 },
    // ];

    const [filteredPencilCases, setFilteredPencilCases] = useState(pencilCases2);

    // useEffect(() => {
    //     const items = pencilCases2.filter((item) => {
    //         const title = item.title || "";
    //         return (
    //             !searchInput || title.toLowerCase().includes(searchInput.toLowerCase())
    //         );
    //     });
    //
    //     setFilteredPencilCases(items);
    // }, [searchInput]);

    useEffect(() => {
        console.log(pencilCases2)
        const filteredItems = pencilCases2.filter((item) => {
            // const title = item.title || "";
            // console.log(title)
            console.log(item.title)
            return (

                // (item.title.toLowerCase().includes(searchInput.toLowerCase())) &&
                (filters.cat === "All" || item.title === filters.cat) &&
                (filters.sorts === "all" ||
                    (filters.sorts === "cheap" && item.price < 50) ||
                    (filters.sorts === "expensive" && item.price >= 50)) &&
                (filters.size === "all" ||
                    (filters.size === "big" && item.size > 2) ||
                    (filters.size === "small" && item.size <= 2))
                // add other filtering conditions as needed
            );
        });

        setFilteredPencilCases(filteredItems);
    }, [pencilCases2, filters]);

    return (
        <section>
            <div className="About-pencilcases-catalog">
                {filteredPencilCases.map((pencilCase) => (
                    <CardWithPrice
                        key={pencilCase.id}
                        id={pencilCase.id}
                        photo={pencilCase.photo}
                        title={pencilCase.title}
                        text={pencilCase.text}
                        price={pencilCase.price}
                        size={pencilCase.size}
                    />
                ))}
            </div>
        </section>
    );
};

export default CatalogCards;

