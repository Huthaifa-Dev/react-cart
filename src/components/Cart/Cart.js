import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CartContext from "../../store/cart-context";
import Modal from '../helpers/Modal';
import CartItem from './CartItem';

const Cart = props => {
    const CartCtx = useContext(CartContext);
    const onRemoveHandle = id => CartCtx.removeItem(id);
    const onAddHandle = item => CartCtx.addItem(item);
    const meals = CartCtx.items.map(
        m => <CartItem meal={m} key={m.id} onAdd={onAddHandle} onRemove={onRemoveHandle} />
    )
    return (
        <Modal>
            <ul className={styles['cart-items']}>
                {meals}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{CartCtx.totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                <button className={styles.button} >Order</button>
            </div>
        </Modal>);
}

export default Cart;