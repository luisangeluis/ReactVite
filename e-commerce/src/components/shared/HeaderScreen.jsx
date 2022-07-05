import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderScreen.css';

const HeaderScreen = () => {
    return (
        <header className='header'>
            <h1 className='header_title'>E-commerce</h1>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__items">
                        <NavLink to="/login" className="navbar__links">
                            <i className="fa-solid fa-user"></i>
                            <p>Login</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink to="/purchases" className="navbar__links">
                            <i className="fa-solid fa-store"></i>
                            <p>Purchases</p>

                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink to="/cart" className="navbar__links">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Cart</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderScreen