const initialState = {
    cartItems:[]
};

const cartReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.item.id !== action.payload),
            };
        case "UPDATE_QUANTITY":
            console.log("updating qunatity",action.payload)
            const updatedCartItems = state.cartItems.map((item) => {
                console.log(item.item.id,action.payload.itemId)
                if (item.item.id === action.payload.itemId) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                    };
                }
                return item;
            });
            console.log("upd",updatedCartItems)
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        default:
            return state;
    }
};

export default cartReducer;