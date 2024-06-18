import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop2 ${className}`}>
      <div className="footer2">
        <div className="footer-content2">
          <div className="logo-parent2">
            <div className="logo5">
              <img
                className="logo-symbol-icon5"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h1 className="presentplazazone5">PresentplazaZone</h1>
            </div>
            <div className="about-container">
              <h3 className="about7">About</h3>
              <div className="about8">About</div>
              <div className="faq2">FAQ</div>
              <div className="contact5">Contact</div>
              <div className="press2">Press</div>
              <div className="reviews2">Reviews</div>
            </div>
            <div className="product-group">
              <h3 className="product2">Product</h3>
              <div className="businesses2">Businesses</div>
              <div className="gift-card-incentives2">Gift Card Incentives</div>
            </div>
            <div className="legal-group">
              <h3 className="legal2">Legal</h3>
              <div className="site-terms2">Site Terms</div>
              <div className="privacy2">Privacy</div>
            </div>
            <div className="use-gifthaven-group">
              <h3 className="use-gifthaven2">Use GiftHaven</h3>
              <div className="how-it-works2">How it works</div>
              <div className="why-us2">Why Us?</div>
              <div className="redeem2">Redeem</div>
            </div>
            <div className="other-stuff-group">
              <h3 className="other-stuff2">Other stuff</h3>
              <div className="blog5">Blog</div>
              <div className="gift-card-worth2">Gift Card Worth</div>
              <div className="sitemap2">Sitemap</div>
            </div>
          </div>
          <div className="presentplazacom-ltd-all-righ-wrapper">
            <div className="presentplazacom-ltd-all2">
              © 2024 presentplaza.com Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
