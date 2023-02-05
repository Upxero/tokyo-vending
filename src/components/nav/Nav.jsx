import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import heart from "../../assets/heart.png";
import cart from "../../assets/shopping-cart.png";
import user from "../../assets/user.png";
import login from "../../assets/user-lock.png";
import exit from "../../assets/exit.png";
import Time from "../../components/time/Time";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import './Nav.css';

const Nav = ({ children }) => {
    const [showClickedSection, setShowClickedSection] = useState('men');
    const { isAuth, logout } = useContext( AuthContext )
    const cartState = useContext( CartContext );
    const statecart = cartState.state;

    const carttotal = statecart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const wishlistState = useContext( WishlistContext );
    const statewish = wishlistState.state;

    const wishlisttotal = statewish.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    function handleLogout() {
        logout()
    }

    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <div className="header-logo">
                        <NavLink to="/">{ children }</NavLink>
                    </div>
                    <ul className="nav-icons">
                        {isAuth ?
                            <li><NavLink to="/user-profile-page"><img src={ user } alt="User"/></NavLink></li>
                            :
                            <li><NavLink to="/login"><img src={ login } alt="Login"/></NavLink></li>
                        }
                        {isAuth &&
                            <li>
                                <NavLink to="/wishlist-page">
                                <div className="wishlist-total-container">
                                    <img src={ heart } alt="Wishlist heart"/>
                                {statewish.length > 0 && (
                                <p className="wishlist-total">{ wishlisttotal }</p>
                                )}
                                </div>
                                </NavLink>
                            </li>
                        }
                        {isAuth &&
                            <li>
                                <NavLink to="/cart-page">
                                <div className="cart-total-container">
                                    <img src={ cart } alt="Shopping cart"/>
                                {statecart.length > 0 && (
                                    <p className="cart-total">{ carttotal }</p>
                                )}
                                </div>
                                </NavLink>
                            </li>
                        }
                        {isAuth &&
                            <li>
                                <button className="nav-logout-btn" type="button" onClick={ handleLogout }><img src={ exit } alt="Exit"/></button>
                            </li>
                        }
                    </ul>
                    <Time/>
                </nav>
                <div className="category-pages">
                    <div className="category-buttons-container">
                        <li><NavLink to="/products-men">
                        <button
                            className={`category-button ${
                                showClickedSection === "men" && "bg-color-category-button"
                            }`}
                            onClick={() => setShowClickedSection("men")}
                        >
                            Men
                        </button>
                        </NavLink></li>
                        <li><NavLink to="/products-women">
                        <button
                            className={`category-button ${
                                showClickedSection === "women" && "bg-color-category-button"
                            }`}
                            onClick={() => setShowClickedSection("women")}
                        >
                            Women
                        </button>
                        </NavLink></li>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;
