import React, { useContext, useEffect, useState } from "react";
import styles from './CartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const [btnIsHighlited, setBtnIsHighlited] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const cartAmount = items.reduce((num, curr) => {
        return num + curr.amount
    }, 0);
    const btnClasses = `${styles.button} ${btnIsHighlited ? styles.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlited(true);
        const timer = setTimeout(() => {
            setBtnIsHighlited(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartAmount}</span>
        </button>
    )
}

export default CartButton;