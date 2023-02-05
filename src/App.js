import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ProductPageWomen from "./pages/productpage/ProductPageWomen";
import ProductPageMen from "./pages/productpage/ProductPageMen";
import SingleProductPage from "./pages/singleproductpage/SingleProductPage";
import LoginPage from "./pages/authpages/LoginPage";
import SignUpPage from "./pages/authpages/SignUpPage";
import CartPage from "./pages/cartpage/CartPage";
import WishListPage from "./pages/wishlistpage/WishListPage";
import UserProfilePage from "./pages/userprofilepage/UserProfilePage";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { AuthContext } from './context/AuthContext';
import logo from "./assets/tokyo-logo.png";
import './App.css';

function App() {
    const { isAuth } = useContext( AuthContext );

    return (
        <>
            <Nav>
                <img src={ logo } alt="Tokyo Vending logo"/>
            </Nav>

            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/products-women" element={ <ProductPageWomen/> }/>
                <Route path="/products-men" element={ <ProductPageMen/> }/>
                <Route path="/products/:id" element={ <SingleProductPage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/sign-up" element={ <SignUpPage/> }/>
                <Route path="/cart-page" element={ <CartPage/>}/>
                <Route path="/wishlist-page" element={ <WishListPage/> } />
                <Route path="/user-profile-page" element={ isAuth ? <UserProfilePage/> : <Navigate to="/login"/> }/>
                <Route path="/*" element={ <ErrorPage/> } />
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
