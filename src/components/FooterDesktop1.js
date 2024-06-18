import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer1">
        <div className="footer-content1">
          <div className="footer-links1">
            <div className="logo3">
              <img
                className="logo-symbol-icon3"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h1 className="presentplazazone3">PresentplazaZone</h1>
            </div>
            <div className="footer-navigation">
              <h3 className="about4">About</h3>
              <div className="about5">About</div>
              <div className="faq1">FAQ</div>
              <div className="contact3">Contact</div>
              <div className="press1">Press</div>
              <div className="reviews1">Reviews</div>
            </div>
            <div className="links-column">
              <h3 className="product1">Product</h3>
              <div className="businesses1">Businesses</div>
              <div className="gift-card-incentives1">Gift Card Incentives</div>
            </div>
            <div className="links-column1">
              <h3 className="legal1">Legal</h3>
              <div className="site-terms1">Site Terms</div>
              <div className="privacy1">Privacy</div>
            </div>
            <div className="links-column2">
              <h3 className="use-gifthaven1">Use GiftHaven</h3>
              <div className="how-it-works1">How it works</div>
              <div className="why-us1">Why Us?</div>
              <div className="redeem1">Redeem</div>
            </div>
            <div className="links-column3">
              <h3 className="other-stuff1">Other stuff</h3>
              <div className="blog3">Blog</div>
              <div className="gift-card-worth1">Gift Card Worth</div>
              <div className="sitemap1">Sitemap</div>
            </div>
          </div>
          <div className="copyright1">
            <div className="presentplazacom-ltd-all1">
              © 2024 presentplaza.com Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
