import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
import { WishlistContextProvider } from "./context/WishlistContext";
import './index.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <CartContextProvider>
                    <WishlistContextProvider>
                        <App/>
                    </WishlistContextProvider>
                </CartContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);
