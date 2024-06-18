import PropTypes from "prop-types";
import "./Header21.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header3 ${className}`}>
      <div className="header-inner1">
        <div className="frame-wrapper1">
          <div className="logo-parent1">
            <div className="logo6">
              <img
                className="logo-symbol-icon6"
                loading="lazy"
                alt=""
                src="/logo-symbol.svg"
              />
              <h1 className="presentplazazone5">PresentplazaZone</h1>
            </div>
            <nav className="frame-nav">
              <div className="about7">About</div>
              <div className="blog5">Blog</div>
              <div className="work3">Work</div>
              <div className="platform3">Platform</div>
              <div className="contact5">Contact</div>
              <div className="shop4">Shop</div>
            </nav>
            <div className="shop-container">
              <div className="shop5">Store Locator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
