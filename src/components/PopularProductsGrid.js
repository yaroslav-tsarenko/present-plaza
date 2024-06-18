import PopularProductCards1 from "./PopularProductCards1";
import PopularProductCards from "./PopularProductCards";
import PropTypes from "prop-types";
import "./PopularProductsGrid.css";

const PopularProductsGrid = ({ className = "" }) => {
  return (
    <div className={`popular-products-grid ${className}`}>
      <PopularProductCards1
        productImage="/rectangle-50-2@2x.png"
        kidsToys="Kids Toys"
        needs={`& Needs`}
      />
      <PopularProductCards
        rectangle50="/rectangle-50-3@2x.png"
        shoes={`Shoes &`}
        wallets="Wallets"
      />
      <div className="card-design-rolex">
        <div className="card-design-rolex-child" />
        <img className="image-1-icon1" alt="" src="/image-1-1@2x.png" />
        <div className="usd-100-10009">USD $100 -$1000</div>
      </div>
      <PopularProductCards
        rectangle50="/rectangle-50-4@2x.png"
        shoes="Kids Toys"
        wallets={`& Needs`}
      />
      <PopularProductCards1
        productImage="/rectangle-50-5@2x.png"
        kidsToys={`Shoes &`}
        needs="Wallets"
        propMarginLeft="unset"
        propBackdropFilter="unset"
        propWidth="133px"
        propWidth1="180.1px"
      />
    </div>
  );
};

PopularProductsGrid.propTypes = {
  className: PropTypes.string,
};

export default PopularProductsGrid;
