import PropTypes from "prop-types";
import "./AllProducts.css";

const AllProducts = ({ className = "" }) => {
  return (
    <div className={`all-products ${className}`}>
      <div className="all-products-inner">
        <div className="product-icons-parent">
          <input className="product-icons" type="checkbox" />
          <div className="all-products1">All Products</div>
        </div>
      </div>
      <div className="all-products-child">
        <div className="vector-parent">
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="mobile-phone-credit">Mobile phone credit</div>
        </div>
      </div>
      <div className="all-products-inner1">
        <div className="vector-group">
          <img className="vector-icon1" alt="" src="/vector-2.svg" />
          <div className="e-commerce">E-Commerce</div>
        </div>
      </div>
      <div className="all-products-inner2">
        <div className="vector-container">
          <img className="vector-icon2" alt="" src="/vector-3.svg" />
          <div className="fashion-lifestyle">{`Fashion & Lifestyle`}</div>
        </div>
      </div>
      <div className="all-products-inner3">
        <div className="foods-and-restaurantssvg-parent">
          <img
            className="foods-and-restaurantssvg-icon"
            loading="lazy"
            alt=""
            src="/foodsandrestaurantssvg.svg"
          />
          <div className="foods-restaurants">{`Foods & Restaurants`}</div>
        </div>
      </div>
      <div className="all-products-inner4">
        <div className="electronicssvg-parent">
          <img
            className="electronicssvg-icon"
            alt=""
            src="/electronicssvg.svg"
          />
          <div className="electronics1">Electronics</div>
        </div>
      </div>
      <div className="all-products-inner5">
        <div className="home-and-gardensvg-parent">
          <img
            className="home-and-gardensvg-icon"
            alt=""
            src="/homeandgardensvg.svg"
          />
          <div className="home-garden">{`Home & Garden`}</div>
        </div>
      </div>
      <div className="all-products-inner6">
        <div className="health-spa-beautysvg-parent">
          <img
            className="health-spa-beautysvg-icon"
            alt=""
            src="/healthspabeautysvg.svg"
          />
          <div className="health-spa">{`Health, Spa & Beauty`}</div>
        </div>
      </div>
      <div className="all-products-inner7">
        <div className="travelsvg-parent">
          <img className="travelsvg-icon" alt="" src="/travelsvg.svg" />
          <div className="travel-experiences">{`Travel & Experiences`}</div>
        </div>
      </div>
      <div className="all-products-inner8">
        <div className="charitysvg-parent">
          <img className="charitysvg-icon" alt="" src="/charitysvg.svg" />
          <div className="charity">Charity</div>
        </div>
      </div>
    </div>
  );
};

AllProducts.propTypes = {
  className: PropTypes.string,
};

export default AllProducts;
