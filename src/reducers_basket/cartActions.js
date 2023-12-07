export const addToCart = (item) => {
    console.log(item)
    return {
        type: 'ADD_TO_CART',
        payload: {item, "quantity":1}
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: itemId,
    };
};
export const updateQuantity = (itemId, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { itemId, quantity },
});