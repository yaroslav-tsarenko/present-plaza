import React from 'react';
import "./Footer.css";
import {ReactComponent as WhiteLogo} from "../../../src/assets/logo-white.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <section>
                    <WhiteLogo />
                </section>
                <section>
                    <h2>About</h2>
                    <Link className="footer-links" to="/about">About</Link>
                    <Link className="footer-links" to="/faq">FAQ</Link>
                    <Link className="footer-links" to="/contact">Contact</Link>
                    <Link className="footer-links" to="/press">Press</Link>
                    <Link className="footer-links" to="/reviews">Reviews</Link>
                </section>
                <section>
                    <h2>Product</h2>
                    <Link className="footer-links" to="/businesses">Businesses</Link>
                    <Link className="footer-links" to="/incentives">Gift Card Incentives</Link>
                </section>
                <section>
                    <h2>Legal</h2>
                    <Link className="footer-links" to="/terms-and-conditions">Site Tems</Link>
                    <Link className="footer-links" to="/incentives">Gift Card Incentives</Link>
                </section>
                <section>
                    <h2>Use GiftHeaven</h2>
                    <Link className="footer-links" to="/how-it-works">How it works</Link>
                    <Link className="footer-links" to="/why-us">Why Us?</Link>
                    <Link className="footer-links" to="/redeem">Redeem</Link>
                </section>
                <section>
                    <h2>Other stuff</h2>
                    <Link className="footer-links" to="/blog">Blog</Link>
                    <Link className="footer-links" to="/gift-worth">Gift Card Worth</Link>
                    <Link className="footer-links" to="/sitemap">Sitemap</Link>
                </section>
            </div>
            <div className="footer-container-bottom">
                <p>© 2024 presentplaza.com Ltd. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;