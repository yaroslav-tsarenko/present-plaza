import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ className = "", pngwing1, propBackground }) => {
  const cardBackgroundsStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div className={`product47 ${className}`}>
      <div className="card-design12">
        <div className="card-backgrounds" style={cardBackgroundsStyle} />
        <div className="product-details">
          <img
            className="pngwing-1-icon4"
            loading="lazy"
            alt=""
            src={pngwing1}
          />
          <h2 className="wishdeck-giftcards3">
            <p className="wishdeck3">WishDeck</p>
            <p className="giftcards3">GiftCards</p>
          </h2>
        </div>
        <div className="usd-100-100010">USD $100 -$1000</div>
      </div>
      <div className="product-actions">
        <div className="action-buttons1">
          <h3 className="playstation3">PlayStation</h3>
          <img className="heart-icon3" loading="lazy" alt="" src="/heart.svg" />
        </div>
        <div className="rating-containers">
          <div className="stars4">
            <img className="star-icon20" alt="" src="/star.svg" />
            <img className="star-icon21" alt="" src="/star.svg" />
            <img className="star-icon22" alt="" src="/star.svg" />
            <img className="star-icon23" alt="" src="/star.svg" />
            <img className="star-icon24" alt="" src="/star.svg" />
          </div>
          <div className="empty-action">(16)</div>
        </div>
        <div className="empty-container">$50</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  pngwing1: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
};

export default Product;
