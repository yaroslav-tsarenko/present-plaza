import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PopularProductCards1.css";

const PopularProductCards1 = ({
  className = "",
  productImage,
  kidsToys,
  needs,
  propMarginLeft,
  propBackdropFilter,
  propWidth,
  propWidth1,
}) => {
  const popularProductCardsStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const cardDesignkidsStyle = useMemo(() => {
    return {
      backdropFilter: propBackdropFilter,
    };
  }, [propBackdropFilter]);

  const kidsToysContainer1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const uSD1001000Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`popular-product-cards ${className}`}
      style={popularProductCardsStyle}
    >
      <div className="card-designkids1" style={cardDesignkidsStyle}>
        <img className="product-image-icon" alt="" src={productImage} />
        <h2 className="kids-toys-container1" style={kidsToysContainer1Style}>
          <p className="kids-toys1">{kidsToys}</p>
          <p className="needs1">{needs}</p>
        </h2>
        <div className="usd-100-10007" style={uSD1001000Style}>
          USD $100 -$1000
        </div>
      </div>
    </div>
  );
};

PopularProductCards1.propTypes = {
  className: PropTypes.string,
  productImage: PropTypes.string,
  kidsToys: PropTypes.string,
  needs: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
  propBackdropFilter: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default PopularProductCards1;
