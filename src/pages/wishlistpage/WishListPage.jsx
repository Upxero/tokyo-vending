import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { WishlistCard } from "../../components/wishlistcard/WishlistCard";
import "./WishListPage.css";

const WishListPage = () => {
    const wishlistState = useContext( WishlistContext );
    const state = wishlistState.state;

    return (
        <>
            <div className="landing-page">
                <h2 className="wishlist-page-title">FAVOURITES</h2>
                {state.length === 0 && (
                <div className="wishlist-page">
                        <div className="wishlist-text">
                            <div className="wishlist-text-title">
                                SAVE YOUR FAVOURITE ITEMS
                            </div>
                            <p className="wishlist-text-description">
                                Want to save the items that you love? Just click on the heart
                                symbol on the product card and it will show up here.
                            </p>
                            <Link to="/products-men">
                                <button className="wishlist-browse-btn">Browse Now</button>
                            </Link>
                        </div>
                </div>
                )}
                <div className="wishlist-page">
                    <div className="wishlist-item-container">
                        <WishlistCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishListPage;