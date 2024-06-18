import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product3.css";

const Product3 = ({
  className = "",
  image1,
  propTop,
  propLeft,
  propBorderRadius,
  propBackground,
}) => {
  const product31Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      background: propBackground,
    };
  }, [propBorderRadius, propBackground]);

  return (
    <div className={`product36 ${className}`} style={product31Style}>
      <div className="card-design6">
        <div className="card-design-adidas">
          <div
            className="card-design-adidas-child"
            style={rectangleDiv1Style}
          />
          <div className="image-1-container">
            <img className="image-1-icon3" loading="lazy" alt="" src={image1} />
          </div>
          <div className="usd-100-100013">USD $100 -$1000</div>
        </div>
      </div>
      <h3 className="popular-card6">Popular Card</h3>
      <div className="background-parent2">
        <div className="background12">
          <div className="container12">
            <div className="online6">Online</div>
          </div>
        </div>
        <div className="background13">
          <div className="container13">
            <div className="in-store6">In-Store</div>
          </div>
        </div>
      </div>
      <div className="adidas-wrapper3">
        <div className="adidas6">Adidas</div>
      </div>
    </div>
  );
};

Product3.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBackground: PropTypes.any,
};

export default Product3;
