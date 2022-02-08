import React, { useContext } from "react";
import styles from './CartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const cartAmount = items.reduce((num, curr) => {
        return num + curr.amount
    }, 0);
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartAmount}</span>
        </button>
    )
}

export default CartButton;