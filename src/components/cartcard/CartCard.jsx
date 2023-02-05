import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./CartCard.css";

export const CartCard = () => {
    const cartState = useContext( CartContext );
    const state = cartState.state;
    const cartDispatch = cartState.dispatch;

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const { logout } = useContext( AuthContext );

    function handleLogout() {
        logout();
        alert("Thank you for shopping at Tokyo Vending! You can now collect your item.");
    }

    return (
        <>
            { state.map((item) => {
                return (
                    <div className="cart-items">
                        <img src={item.image} alt="product"/>
                        <div className="cart-items-info">
                            <h2>{item.title}</h2>
                            <div>
                                {"Quantity: "}
                                <button
                                    className="minus-btn"
                                    onClick={() => {
                                        if (item.quantity > 1) {
                                            cartDispatch({ type: "DECREASE", payload: item });
                                        } else {
                                            cartDispatch({ type: "REMOVE", payload: item });
                                        }
                                    }}
                                >
                                    -
                                </button>
                                {` ${item.quantity} `}
                                <button
                                    className="plus-btn"
                                    onClick={() => cartDispatch({ type: "INCREASE", payload: item })}
                                >
                                    +
                                </button>
                            </div>
                            <h3>Total: €{item.quantity * item.price}</h3>
                            <button
                                className="cart-remove-btn"
                                onClick={() => cartDispatch({ type: "REMOVE", payload: item })}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                );
            })}
            {state.length > 0 && (
                <div className="total-checkout">
                    <h2>Total: €{total}</h2>
                    <button className="checkout-btn" onClick={ handleLogout }>Proceed to Checkout</button>
                </div>
            )}
        </>
    );
};