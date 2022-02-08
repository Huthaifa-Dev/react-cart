import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import mealsImage from '../../assets/meals.jpg';
import CartButton from "./CartButton";
import styles from './Header.module.scss';

const Header = (props) => {
    const showCartHandler = () => {
        props.onShowCart();
    }
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton onClick={showCartHandler} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )

}

export default Header;
