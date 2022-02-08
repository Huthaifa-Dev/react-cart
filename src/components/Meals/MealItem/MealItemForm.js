import React, { useRef, useState } from "react";
import Input from "../../helpers/Input";
import styles from './MealItemForm.module.scss';

const MealItemForm = (props) => {
    const [validAmount, setValidAmount] = useState(false);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setValidAmount(false);
            return;
        }
        props.onAdd(enteredAmountNumber);
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button type="submit">+ Add</button>
        </form>
    )
};

export default MealItemForm;