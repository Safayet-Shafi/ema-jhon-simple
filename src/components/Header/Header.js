import React from 'react';
import logo from '../../images/Logo.svg'
import "./Header.css"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="http://">Shop</a>
                <a href="http://">Cart</a>
                <a href="http://">Inventory</a>
                <a href="http://">About</a>
            </div>
        </nav>
    );
};

export default Header;