import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';


class OrderSummery extends Component {
    componentDidUpdate() {
        console.log('[Order Summery] Will Update...')
    }
    render() {
        const ingredientSummery = Object.keys(this.props.ingredients)
            .map(igkey =>{
                return (
                    <li key={igkey}>
                        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
                    </li>
                )
            })
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummery}
                </ul>
                <p>Continue to Checkout?</p>
                <p><strong>{this.props.price}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummery;    