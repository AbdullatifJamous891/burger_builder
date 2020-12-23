import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey =>{
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey+i} type={igkey} />
            })
        })
        .reduce((arr, elem) => {
            return arr.concat(elem)
        }, [])
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding an ingredients!</p>
    }    

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}

export default burger;  