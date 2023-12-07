

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../Components/Footer/Footer";
import Cart_object from "../Components/cart_object";
import "../pages/Card.css"
import {updateQuantity, removeFromCart} from "../reducers_basket/cartActions";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems);

    const handleQuantityChange = (productId, newQuantity) => {
        if(newQuantity<1){
            dispatch(removeFromCart(productId));
            alert("Removed item because quantity reached 0")
        }
        dispatch(updateQuantity(productId, newQuantity));
        console.log(productId,newQuantity)
    };

    const calculateTotalAmount = () => {
        console.log(cartItems)
        let totalAmount = 0;
        cartItems.forEach((item) => {
            totalAmount += item.item.price * item.quantity;
        });
        return totalAmount;
    };



    return (
        <div>
            <p className="title_shopping_cart">Shopping Cart</p>
            <Cart_object cartItems={cartItems}   handleQuantityChange={handleQuantityChange}></Cart_object>
            <div className="amount">
                <p>Total amount</p>
                <p className="total_amount">${calculateTotalAmount().toFixed(2)}</p>
            </div>
            <div className="buttons">
                <div>
                    <Link to="/catalog" className="button_back_catalog">Back to catalog</Link>
                </div>
                <div>
                    <button className="button_continue">Continue</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;
