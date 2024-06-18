import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="logo-container1">
            <div className="logo4">
              <img
                className="logo-symbol-icon4"
                loading="lazy"
                alt=""
                src="/logo-symbol.svg"
              />
              <h1 className="presentplazazone3">PresentplazaZone</h1>
            </div>
            <nav className="navigation">
              <div className="about4">About</div>
              <div className="blog3">Blog</div>
              <div className="work2">Work</div>
              <div className="platform2">Platform</div>
              <div className="contact3">Contact</div>
              <div className="shop3">Shop</div>
            </nav>
            <Button
              className="logo-container-child"
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
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
