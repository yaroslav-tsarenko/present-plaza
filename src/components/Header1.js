import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="header-child">
        <div className="frame-container">
          <nav className="logo-container">
            <div className="logo2">
              <img
                className="logo-symbol-icon2"
                loading="lazy"
                alt=""
                src="/logo-symbol.svg"
              />
              <h1 className="presentplazazone2">PresentplazaZone</h1>
            </div>
            <nav className="about-container">
              <div className="about3">About</div>
              <div className="blog2">Blog</div>
              <div className="work1">Work</div>
              <div className="platform1">Platform</div>
              <div className="contact2">Contact</div>
              <div className="shop2">Shop</div>
            </nav>
            <Button
              className="frame-item"
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
          </nav>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
