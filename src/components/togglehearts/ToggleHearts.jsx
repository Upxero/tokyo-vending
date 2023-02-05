import React from "react";
import './ToggleHearts.css';
import like from "../../assets/like.png";
import love from "../../assets/love.png";

const ToggleHearts = () => {
    return (
        <div className="wishlist-btn">
            <img className="img-below" src={ like } alt="Red heart"/>
            <img className="img-top" src={ love } alt="White heart"/>
        </div>
    );
};

export default ToggleHearts;