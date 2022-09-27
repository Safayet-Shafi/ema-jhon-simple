import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,price,ratings,seller,name}=props.product;
    
     
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <h5>Price:{price}$</h5>
                <h5>Seller :{seller}</h5>
                <h5>Ratings:{ratings} *</h5>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-add'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
        
    );
};

export default Product;