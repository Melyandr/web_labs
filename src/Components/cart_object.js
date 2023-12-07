// import React, { useState }  from "react";
// import cartItems from "../../src/reducers_basket/cartReducer"
// import "../Components/cart_object.css"
// import third_photo from "../photos/3.jpg";
// import fourth_photo from "../photos/4.jpg";
// import fifth_photo from "../photos/5.jpg";
//
// const imagePaths=
//     {"third_photo":third_photo,"fourth_photo":fourth_photo,"fifth_photo":fifth_photo}
// const Cart_object = ({ cartItems }) => {
//     const [counters, setCounters] = useState(Array(cartItems.length).fill(1));
//
//     const increaseCounter = (index) => {
//         const updatedCounters = [...counters];
//         updatedCounters[index] += 1;
//         setCounters(updatedCounters);
//     };
//
//     const decreaseCounter = (index) => {
//         const updatedCounters = [...counters];
//         if (updatedCounters[index] > 1) { // Змінено умову, щоб не дозволяти зменшувати значення нижче 1
//             updatedCounters[index] -= 1;
//             setCounters(updatedCounters);
//         }
//     };
//     return (
//         <div className="carts_objects">
//             {cartItems.map((item, index) => (
//                 <div  className="cart_block">
//                     <img src={imagePaths[item.photo]} alt="pencilcase" className="pencilcase_cart_object"/>
//                     <p className="titles_cart_object">{item.title}</p>
//                     <button className="minus_button" onClick={() => decreaseCounter(index)}>-</button>
//                     <p className="counter">{counters[index]}</p>
//                     <button className="plus_button" onClick={() => increaseCounter(index)}>+</button>
//                     <p className="cart_price"> ${item.price} </p>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default Cart_object;
import React, { useState } from "react";
import "../Components/cart_object.css";
import third_photo from "../photos/3.jpg";
import fourth_photo from "../photos/4.jpg";
import fifth_photo from "../photos/5.jpg";

const imagePaths = {
    third_photo: third_photo,
    fourth_photo: fourth_photo,
    fifth_photo: fifth_photo,
};

const Cart_object = ({ cartItems ,handleQuantityChange}) => {
    const [counters, setCounters] = useState(Array(cartItems.length).fill(1));

    const increaseCounter = (index, itemId) => {
        const updatedCounters = [...counters];
        updatedCounters[index] += 1;
        setCounters(updatedCounters);
        handleQuantityChange(itemId, updatedCounters[index]);
    };

    const decreaseCounter = (index, itemId) => {
        const updatedCounters = [...counters];
            updatedCounters[index] -= 1;
            setCounters(updatedCounters);
            handleQuantityChange(itemId, updatedCounters[index]);

    };

    return (
        <div className="carts_objects">
            {cartItems.map((item, index) => (
                <div className="cart_block" key={index}>
                    <img
                        src={imagePaths[item.item.photo]}
                        alt="pencilcase"
                        className="pencilcase_cart_object"
                    />
                    <div className="title_container">
                        <p className="titles_cart_object">{item.item.title}</p>


                    </div>
                    <div className="quantity_container">
                    <button className="minus_button" onClick={() => decreaseCounter(index,item.item.id)}>
                        -
                    </button>
                    <p className="counter">{counters[index]}</p>
                    <button className="plus_button" onClick={() => increaseCounter(index,item.item.id)}>
                        +
                    </button>
                    </div>
                    <p className="cart_price">${item.item.price}</p>

                </div>
            ))}
        </div>
    );
};

export default Cart_object;
