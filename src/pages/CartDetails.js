import FrameComponent1 from "../components/FrameComponent1";
import CartItems from "../components/CartItems";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart-details-1920">
      <FrameComponent1 checkout="Your Cart" />
      <CartItems />
      <footer className="footer-desktop">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <div className="logo">
                <img
                  className="logo-symbol-icon"
                  alt=""
                  src="/logo-symbol-1.svg"
                />
                <h2 className="presentplazazone">PresentplazaZone</h2>
              </div>
              <div className="social-links">
                <b className="about">About</b>
                <div className="about1">About</div>
                <div className="faq">FAQ</div>
                <div className="contact">Contact</div>
                <div className="press">Press</div>
                <div className="reviews">Reviews</div>
              </div>
              <div className="product-parent">
                <b className="product">Product</b>
                <div className="businesses">Businesses</div>
                <div className="gift-card-incentives">Gift Card Incentives</div>
              </div>
              <div className="legal-parent">
                <b className="legal">Legal</b>
                <div className="site-terms">Site Terms</div>
                <div className="privacy">Privacy</div>
              </div>
              <div className="use-gifthaven-parent">
                <b className="use-gifthaven">Use GiftHaven</b>
                <div className="how-it-works">How it works</div>
                <div className="why-us">Why Us?</div>
                <div className="redeem">Redeem</div>
              </div>
              <div className="other-stuff-parent">
                <b className="other-stuff">Other stuff</b>
                <div className="blog">Blog</div>
                <div className="gift-card-worth">Gift Card Worth</div>
                <div className="sitemap">Sitemap</div>
              </div>
            </div>
            <div className="copyright">
              <div className="presentplazacom-ltd-all">
                © 2024 presentplaza.com Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartDetails;
