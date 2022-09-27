import React from 'react';

const Cart = ({cart}) => {
    
    return (
        <div>
            <h2>Cart Summary</h2>
            <h1>Item Added  :{cart.length}</h1>
        </div>
    );
};

export default Cart;