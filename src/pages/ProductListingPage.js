import { Button } from "@mui/material";
import CardDesignGiftcard from "../components/CardDesignGiftcard";
import UserOffer from "../components/UserOffer";
import Recommendations from "../components/Recommendations";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="product-listing-page">
      <header className="header1">
        <div className="header-inner">
          <div className="frame-wrapper">
            <div className="logo-parent">
              <div className="logo1">
                <img
                  className="logo-symbol-icon1"
                  loading="lazy"
                  alt=""
                  src="/logo-symbol.svg"
                />
                <h1 className="presentplazazone1">PresentplazaZone</h1>
              </div>
              <nav className="navigation">
                <div className="about2">About</div>
                <div className="blog1">Blog</div>
                <div className="work">Work</div>
                <div className="platform">Platform</div>
                <div className="contact1">Contact</div>
                <div className="shop">Shop</div>
              </nav>
              <Button
                className="frame-child"
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
      <section className="content">
        <div className="card-design-giftcard-parent">
          <CardDesignGiftcard />
          <UserOffer />
        </div>
      </section>
      <Recommendations />
      <FooterDesktop />
    </div>
  );
};

export default ProductListingPage;
