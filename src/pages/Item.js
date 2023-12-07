import React,{ useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer.js";
import '../Components/Footer/Footer.css'
import {Outlet, useParams} from "react-router-dom";
import './item.css'
import {getPencilcaseById} from "../Api/api.js";


const Item = () => {


    const { id } = useParams();
    const itemId = parseInt(id);
    let [selectedItem, setSelectedItem] = useState("");
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
    // const selectedItem = pencilCases2.find((pencilcase) => pencilcase.id === itemId);



    return (
        <div>

            <div className="item_main_part">
                <div>
            <img className="item_photo" src={selectedItem.photo} alt={selectedItem.title} />
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
                        <select className="select_purpose">
                            <option value="select_school" >for school</option>
                            <option value="select_office" >for office</option>
                            <option value="select_military">for military</option>
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
                    <a href="" ><button className="button_add_card"> Add card</button></a>
                </div>
            </div>


            <Footer />


        </div>
    );
};

export default Item;