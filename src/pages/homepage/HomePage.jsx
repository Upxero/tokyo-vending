import React from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';
import video from "../../assets/landing-video.mp4";

const HomePage = () => {
    return (
        <div className="landing-page-home">
            <div className="video-container">
                <video autoPlay loop muted className="landing-video">
                    <source
                        src={ video } type="video/mp4"
                    />
                </video>
                <div className="video-text">
                    <div className="video-title">More than Fashion</div>
                    <div className="video-sub-title">
                        Go traditional with Tokyo Vending.
                    </div>
                    <Link to="/products-men">
                        <button
                            className="cta-button"
                        >
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;