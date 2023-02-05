import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { AuthContext } from "../../context/AuthContext";
import './ProductPage.css';
import ToggleHearts from "../../components/togglehearts/ToggleHearts";

const ProductPageMen = () => {
    const [ data, setData ] = useState( [] );
    const [ loading, setLoading ] = useState( false )
    const { isAuth } = useContext( AuthContext )
    const cartAlert = () => {
        alert('Please login to add products to the shopping cart');
    };
    const wishlistAlert = () => {
        alert('Please login to add products to favourites');
    };

    useEffect(() => {
        setLoading( true );
        async function fetchData() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing");
                console.log(response);
                setData(response.data);
            } catch (e) {
                console.error(e);
            }
            setLoading( false );
        }
        void fetchData();
    }, [])

    const cartState = useContext( CartContext );
    const cartDispatch = cartState.dispatch;

    const wishlistState = useContext( WishlistContext );
    const wishlistDispatch = wishlistState.dispatch;

    return (
        <>
            { loading && <p>Loading...</p> }
            <ul className="item-container">
                {data.map( (item) => {
                    item.quantity = 1;
                    return (
                        <li className="item" key={ item.id }>
                            <Link className="item-title-link" to={ `/products/${ item.id }` }>
                                <div>
                                    <h2>{ item.title.slice( 0, 25 ) }</h2>
                                    <h3>€ { item.price }</h3>
                                    <img src={ item.image } alt={ item.title }/>
                                </div>
                            </Link>
                            <div className="button-container">
                                {isAuth ?
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => cartDispatch({ type: "ADD", payload: item })}
                                >
                                    Add to cart
                                </button>
                                    :
                                <button
                                    className="add-to-cart-btn"
                                    onClick={ cartAlert }
                                >
                                    Add to cart
                                </button>
                                }
                                {isAuth ?
                                    <button
                                        className="add-to-wishlist-btn"
                                        onClick={() => wishlistDispatch({type: "ADD", payload: item})}
                                    >
                                        <ToggleHearts/>
                                    </button>
                                    :
                                    <button
                                        className="add-to-wishlist-btn"
                                        onClick={ wishlistAlert }
                                    >
                                        <ToggleHearts/>
                                    </button>
                                }
                            </div>
                        </li>
                    )
                } ) }
            </ul>
        </>
    );
};

export default ProductPageMen;