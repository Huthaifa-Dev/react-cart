import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = props => {
    const { meal } = props;
    const removeHandle = event => {
        event.preventDefault();
        props.onRemove(meal.id);
    }
    const addHandle = event => {
        event.preventDefault();
        props.onAdd({ ...meal, amount: 1 });
    }
    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.price}>{meal.price}</div>
                <span className={styles.amount}>x{meal.amount}</span>
            </div>
            <div className={styles.action}>
                <button onClick={removeHandle}>-</button>
                <button onClick={addHandle}>+</button>
            </div>
        </li>
    )
}

export default CartItem;