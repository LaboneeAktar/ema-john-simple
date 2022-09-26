import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        //Total Price
        total = total + product.price;
        //Shipping Charge
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3> Oder Summary</h3>
            <div className='cart-details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping: $ {shipping}</p>
                <p>Tax: $ {tax.toFixed(2)}</p>
                <h5>Grand Total: $ {grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;