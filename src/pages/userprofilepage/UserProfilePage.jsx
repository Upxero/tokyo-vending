import React, { useState, useContext  } from "react";
import profile from "../../assets/user-profile.png";
import { AuthContext } from "../../context/AuthContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./UserProfilePage.css";
import { Link } from "react-router-dom";

const UserProfilePage = () => {
    const [showClickedSection, setShowClickedSection] = useState("profile");
    const { user : { username, email } } = useContext( AuthContext )
    const { logout } = useContext( AuthContext )

    function handleLogout() {
        logout()
    }

    const wishlistState = useContext( WishlistContext );
    const statewish = wishlistState.state;

    const wishlisttotal = statewish.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <>
            <div className="user-profile-container">
                <div className="user-profile">
                    <img src={profile} alt="Profile"/>
                </div>
                <div className="user-name">
                    Hello { username }!
                </div>
                <div className="profile-buttons-container">
                    <button
                        className={`profile-button ${
                            showClickedSection === "profile" && "bg-color-profile-button"
                        }`}
                        onClick={() => setShowClickedSection("profile")}
                    >
                        Profile
                    </button>
                    <button
                        className={`profile-button ${
                            showClickedSection === "favourites" && "bg-color-profile-button"
                        }`}
                        onClick={() => setShowClickedSection("favourites")}
                    >
                        Favourites
                    </button>

                    <button
                        className={`profile-button ${
                            showClickedSection === "settings" && "bg-color-profile-button"
                        }`}
                        onClick={() => setShowClickedSection("settings")}
                    >
                        Settings
                    </button>
                </div>
                <div>
                    {showClickedSection === "profile" && (
                        <div className="personal-details">
                            <div>
                                Name : { username }
                            </div>
                            <div>
                                E-mail : { email }
                            </div>
                        </div>
                    )}
                    {showClickedSection === "favourites" && (
                        <div className="personal-details">
                            <div>
                                Total: { wishlisttotal }
                            </div>
                            <Link to="/products-men">
                                <button className="details-browse-btn">Add More</button>
                            </Link>
                        </div>
                    )}
                    {showClickedSection === "settings" && (
                        <div>
                            <button
                                className="log-out-button"
                                onClick={handleLogout}
                            >
                                logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserProfilePage;