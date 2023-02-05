import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-title">Contact us</div>
            <p className="footer-msg">
                If there is any problems, feel free to contact us!
            </p>
            <div className="footer-contact">
                <div>Phone: 0812345678</div>
                <div>Email: contact@tokyo-vending.com</div>
            </div>
            <div className="footer-copyright-text">
                © 2023 | Tokyo Vending
            </div>
        </div>
    );
};

export default Footer;