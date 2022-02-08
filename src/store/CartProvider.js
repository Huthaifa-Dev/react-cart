import { useReducer } from "react";
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const amount = state.totalAmount + (action.value.price * action.value.amount);
        const updatedAmount = +parseFloat(amount).toFixed(2);
        const existingCartItemIndex = state.items.findIndex(
            (item) => action.value.id === item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedCart;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.value.amount
            };

            updatedCart = [...state.items];
            updatedCart[existingCartItemIndex] = updatedItem;
        } else {
            updatedCart = state.items.concat(action.value);
        }

        return {
            items: updatedCart,
            totalAmount: updatedAmount
        };
    } else if (action.type === 'REMOVE') {


        const existingCartItemIndex = state.items.findIndex(
            (item) => action.value === item.id
        );
        const updatedCart = [...state.items];

        const updatedItem = state.items[existingCartItemIndex];

        const amount = state.totalAmount - updatedItem.price;
        const updatedAmount = +parseFloat(amount).toFixed(2);
        if (updatedItem.amount === 1) {
            updatedCart.splice(updatedItem, 1);
        } else {
            updatedItem.amount--;
            updatedCart[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedCart,
            totalAmount: updatedAmount
        };
    }
    return defaultCartState;
}


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', value: item });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', value: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;