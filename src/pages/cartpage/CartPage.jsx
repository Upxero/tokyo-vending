import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartCard } from "../../components/cartcard/CartCard";
import './CartPage.css';

const CartPage = () => {
    const cartState = useContext( CartContext );
    const state = cartState.state;

    return (
        <div className="cart-page-container">
            <h2 className="cart-page-title">CART</h2>
            {state.length === 0 && (
                <div className="cart-empty-msg">
          <span className="cart-empty-msg-title">
            YOUR SHOPPING CART IS EMPTY!
          </span>
                    <Link to="/products-men" className="cart-msg-btn">
                        Shop Now
                    </Link>
                </div>
            )}
            <div className="cart-page">
                <div className="cart-item-container">
                    <CartCard />
                </div>
            </div>
        </div>
    );
};

export default CartPage;