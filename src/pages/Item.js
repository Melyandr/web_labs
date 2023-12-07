// import React,{ useState, useEffect } from "react";
// import Footer from "../Components/Footer/Footer.js";
// import '../Components/Footer/Footer.css'
// import {Outlet, useParams} from "react-router-dom";
// import './item.css'
// import {getPencilcaseById} from "../Api/api.js";
// import third_photo from "../photos/3.jpg";
// import fourth_photo from "../photos/4.jpg";
// import fifth_photo from "../photos/5.jpg";
// import Preloader from "../Preloader/preloader.js"
// import "../Preloader/preloadeer.css"
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../reducers_basket/cartActions';
//
// const Item = () => {
//
//     const dispatch = useDispatch();// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
//     const { id } = useParams();
//     const itemId = parseInt(id);
//     let [selectedItem, setSelectedItem] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//
//     const selectedItem = useSelector(state => state.selectedItem);
//     const isLoading = useSelector(state => state.isLoading);
//
//     const handleAddToCart = () => {
//         dispatch(addToCart(selectedItem)); // Dispatching addToCart action
//     };
//
//     useEffect(() => {
//         const fetchPencilcase = async () => {
//             try {
//
//                 const delay = 500;
//                 const pencilcase = await new Promise(resolve => {
//                     setTimeout(async () => {
//                         const fetchedPencilcase = await getPencilcaseById(itemId);
//                         resolve(fetchedPencilcase);
//                     }, delay);
//                 });
//
//                 setSelectedItem(pencilcase);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching all pencilcases:', error);
//                 setIsLoading(false);
//             }
//         };
//
//         fetchPencilcase();
//     }, []);
//
//     const card_images={
//         third_photo: third_photo,
//         fourth_photo: fourth_photo,
//         fifth_photo: fifth_photo,
//     }
//
//
//     return (
//
//         <div>
//             {isLoading ? (
//                 <Preloader />
//             ) : (
//                 <div>
//                     <div className="item_main_part">
//                         <div>
//                             <img
//                                 className="item_photo"
//                                 src={card_images[selectedItem.photo]}
//                                 alt={selectedItem.title}
//                             />
//                         </div>
//                         <div>
//                             <div className="item_buttons_characteristics">
//                                 <button className="item_button1">1 characteristic</button>
//                                 <button className="item_button2">2 characteristic</button>
//                             </div>
//                             <div className="item_title">
//                                 <h2>{selectedItem.title}</h2>
//                             </div>
//                             <div className="item_text">
//                                 <p>{selectedItem.text}</p>
//                             </div>
//                             <div className="select_and_bought">
//                                 <div className="div_bought">
//                                     <p id="Was_bought">Was bought:</p>
//                                     <output className="price_of_sold" type="text">
//                                         54$
//                                     </output>
//                                 </div>
//                                 <div className="choose_select">
//                                     <p id="Choose_purpose">Choose purpose:</p>
//                                     <select className="select_purpose">
//                                         <option value="select_school">for school</option>
//                                         <option value="select_office">for office</option>
//                                         <option value="select_military">for military</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="above_part">
//                         <div>
//                             <p className="price_item">Price: ${selectedItem.price}</p>
//                         </div>
//                         <div className="buttons_add_back">
//                             <a href="/catalog">
//                                 <button className="button_go_back">Go back</button>
//                             </a>
//                             <a href="">
//                                 <button className="button_add_card"> Add card</button>
//                             </a>
//                         </div>
//                     </div>
//
//                     <Footer />
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Item;
//
import React,{ useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Footer from "../Components/Footer/Footer.js";
import '../Components/Footer/Footer.css'
import {Link, Outlet, useParams} from "react-router-dom";
import './item.css'
import {getPencilcaseById} from "../Api/api.js";
import { addToCart } from "../reducers_basket/cartActions.js";
import third_photo from "../photos/3.jpg"
import fourth_photo from "../photos/4.jpg"
import fifth_photo from "../photos/5.jpg"
const Item = () => {


    const { id } = useParams();
    const itemId = parseInt(id);
    const dispatch = useDispatch();
    let [selectedItem, setSelectedItem] = useState("");
    const [selectedPurpose, setSelectedPurpose] = useState("for school");

    useEffect(() => {
        // Приклад виклику функції отримання всіх олівцевих коробок
        const fetchPencilcase = async () => {
            try {
                const pencilcase = await getPencilcaseById(itemId);
                setSelectedItem(pencilcase)
                console.log('All pencilcases:', pencilcase);

            } catch (error) {
                console.error('Error fetching all pencilcases:', error);
            }
        };

        // Виклик функції отримання всіх олівцевих коробок
        fetchPencilcase();
    }, []);
    const handleAddToCart = () => {
        console.log(selectedItem )
        dispatch(addToCart(selectedItem,selectedPurpose)); // Dispatching addToCart action with the selected item
    };

    if (!selectedItem) {
        return <div>Loading...</div>; // Display a loading indicator while fetching data
    }
    console.log(selectedItem)
    const imagePaths=
        {"third_photo":third_photo,"fourth_photo":fourth_photo,"fifth_photo":fifth_photo}
    return (
        <div>

            <div className="item_main_part">
                <div>
                    <img className="item_photo" src={imagePaths[selectedItem.photo]} alt={selectedItem.title} />
                </div>
                <div>
                    <div className="item_buttons_characteristics">
                        <button className="item_button1">1 characteristic</button>
                        <button className="item_button2">2 characteristic</button>
                    </div>
                    <div className="item_title">
                        <h2>{selectedItem.title}</h2>
                    </div>
                    <div className="item_text">
                        <p>{selectedItem.text}</p>
                    </div>

                    <div className="select_and_bought">
                        <div className="div_bought">
                            <p id="Was_bought">Was bought:</p>
                            <output className="price_of_sold" type="text">54$ </output>
                        </div>
                        <div className="choose_select">
                            <p id="Choose_purpose">Choose purpose:</p>

                            <select
                                className="select_purpose"
                                value={selectedPurpose}

                            >
                                <option value="for school">for school</option>
                                <option value="for office">for office</option>
                                <option value="for military">for military</option>
                            </select>

                        </div>
                    </div>
                </div>


            </div>

            <div className="above_part">
                <div>
                    <p className="price_item">Price: ${selectedItem.price}</p>
                </div>

                <div className="buttons_add_back">
                    <a href="/catalog">< button className="button_go_back">Go back</button></a>
                    <Link to="/card" ><button className="button_add_card" onClick={handleAddToCart}> Add card</button></Link>
                </div>
            </div>


            <Footer />


        </div>
    );
};

export default Item;