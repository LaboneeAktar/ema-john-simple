import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const { img, name, price, category, seller, ratings } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product-container'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3 className='product-name'>{name}</h3>
                <h4>Category: {category}</h4>
                <h4>Price: $ {price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p> Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;