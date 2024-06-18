import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product4.css";

const Product4 = ({
  className = "",
  pngwing1,
  propLeft,
  propTop,
  propBackground,
  propWidth,
  propHeight,
  propMinWidth,
}) => {
  const product3Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const cardImageStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const uSD10010001Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      minWidth: propMinWidth,
    };
  }, [propWidth, propHeight, propMinWidth]);

  return (
    <div className={`product35 ${className}`} style={product3Style}>
      <div className="card-design5">
        <div className="card-design13">
          <div className="card-image" style={cardImageStyle} />
          <div className="card-tags">
            <img
              className="pngwing-1-icon6"
              loading="lazy"
              alt=""
              src={pngwing1}
            />
            <h2 className="wishdeck-giftcards5">
              <p className="wishdeck5">WishDeck</p>
              <p className="giftcards5">GiftCards</p>
            </h2>
          </div>
          <div className="usd-100-100012" style={uSD10010001Style}>
            USD $100 -$1000
          </div>
        </div>
      </div>
      <h3 className="popular-card5">Popular Card</h3>
      <div className="card-availability">
        <div className="background10">
          <div className="container10">
            <div className="online5">Online</div>
          </div>
        </div>
        <div className="background11">
          <div className="container11">
            <div className="in-store5">In-Store</div>
          </div>
        </div>
      </div>
      <div className="brand">
        <div className="adidas5">Adidas</div>
      </div>
    </div>
  );
};

Product4.propTypes = {
  className: PropTypes.string,
  pngwing1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propBackground: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Product4;
