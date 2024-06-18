import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", checkout }) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header3">
        <div className="logo-container-wrapper">
          <div className="logo-container">
            <div className="logo-parent1">
              <div className="logo4">
                <img
                  className="logo-symbol-icon4"
                  loading="lazy"
                  alt=""
                  src="/logo-symbol.svg"
                />
                <h1 className="presentplazazone4">PresentplazaZone</h1>
              </div>
              <nav className="about-group">
                <div className="about6">About</div>
                <div className="blog4">Blog</div>
                <div className="work2">Work</div>
                <div className="platform2">Platform</div>
                <div className="contact4">Contact</div>
                <div className="shop3">Shop</div>
              </nav>
              <Button
                className="frame-button"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  background: "#fabe06",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#fabe06" },
                  width: 198,
                  height: 43,
                }}
              >
                Store Locator
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <div className="checkout-wrapper">
            <h1 className="checkout1">{checkout}</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,
};

export default FrameComponent1;
