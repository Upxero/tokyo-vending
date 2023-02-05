import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/back-arrow.png";
import './SingleProductPage.css';


const SingleProductPage = () => {
    const [ data, setData ] = useState( [] );
    const [ loading, setLoading ] = useState( false )
    const navigate = useNavigate();

    const { id } = useParams()

    useEffect(() => {
        setLoading( true );
        async function fetchData() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/" + id );
                console.log(response);
                setData(response.data);
            } catch (e) {
                console.error(e);
            }
            setLoading( false );
        }
        void fetchData();
    }, [])

    const { title, image, price, description, category } = data;
    return (
        <>
            { loading && <p>Loading...</p> }
            <div>
                <button onClick={() => navigate(-1)}>
                    <div className="back-to-products">
                        <img src={arrow} alt="Back to products"/>
                    </div>
                </button>
                <div className="single-product-page">
                    <div className="product-img-container">
                        <div className="product-main-img">
                            <img
                                src={ image }
                                alt={ title }
                                className="responsive-img-product"
                            />
                        </div>
                    </div>
                    <div className="product-detail-container">
                        <div className="product-detail-part-one">
                            <h1 className="single-product-title">
                                { title }
                            </h1>
                            <h2>Category: { category }</h2>
                            <p>{ description }</p>
                            <h1>€{ price }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;

