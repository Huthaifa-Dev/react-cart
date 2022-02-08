import React from "react";
import Card from "../helpers/Card";
import styles from './AvailableMeals.module.scss';
import Meals from './dummy-meals';
import MealItem from './MealItem/MealItem';
const AvailableMeals = props => {
    const meals = Meals.map((m) => {
        return <MealItem meal={m} key={m.id} />
    })
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {meals}
                </ul>
            </Card>
        </section>

    )
}
export default AvailableMeals;