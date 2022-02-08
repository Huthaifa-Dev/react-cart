import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from './MealItem.module.scss';
import MealItemForm from "./MealItemForm";

const MealItem = props => {
    const { meal } = props;
    const cartCtx = useContext(CartContext);
    const onAddHandler = (amount) => {
        const addedMeal = {
            ...meal,
            amount: +amount
        }
        cartCtx.addItem(addedMeal);
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>{meal.price}</div>
            </div>
            <div>
                <MealItemForm id={meal.id} onAdd={onAddHandler} />
            </div>
        </li>
    )
}

export default MealItem;