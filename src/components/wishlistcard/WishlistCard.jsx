import React, { useContext } from "react";
import "./WishlistCard.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

export const WishlistCard = () => {
    const wishlistState = useContext( WishlistContext );
    const state = wishlistState.state;
    const wishlistDispatch = wishlistState.dispatch;

    const cartState = useContext( CartContext );
    const cartDispatch = cartState.dispatch;

    const total = state.reduce((total, item) => {
        return total + item.quantity * item.quantity;
    }, 0);

    return (
        <>
            {state.map((item) => {
                return (
                    <div className="wishlist-items">
                        <img src={item.image} alt="product" />
                        <div className="wishlist-items-info">
                            <h2>{item.title}</h2>
                            <button
                                className="add-cart-btn"
                                onClick={() => cartDispatch({ type: "ADD", payload: item })}
                            >
                                Add to cart
                            </button>
                            <button
                                className="wishlist-remove-btn"
                                onClick={() => wishlistDispatch({ type: "REMOVE", payload: item })}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                );
            })}
            {state.length > 0 && (
                <div className="total-wishlist">
                    <h2>Total: { total }</h2>
                </div>
            )}
        </>
    );
};