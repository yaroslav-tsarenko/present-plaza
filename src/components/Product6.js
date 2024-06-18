import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product6.css";

const Product6 = ({
  className = "",
  pngwing1,
  playStation,
  propLeft,
  propBackground,
  propHeight,
  propMinWidth,
}) => {
  const product4Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const pngwing1IconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const playStation1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`product4 ${className}`} style={product4Style}>
      <div className="card-design21">
        <div className="card-design2-child" style={rectangleDivStyle} />
        <div className="card-design2-inner">
          <div className="wishdeck-giftcards-parent">
            <h2 className="wishdeck-giftcards">
              <p className="wishdeck">WishDeck</p>
              <p className="giftcards">GiftCards</p>
            </h2>
            <div className="usd-100-10001">USD $100 -$1000</div>
          </div>
        </div>
        <img
          className="pngwing-1-icon1"
          alt=""
          src={pngwing1}
          style={pngwing1IconStyle}
        />
      </div>
      <div className="frame-parent1">
        <div className="playstation-group">
          <h3 className="playstation1" style={playStation1Style}>
            {playStation}
          </h3>
          <img className="heart-icon1" alt="" src="/heart.svg" />
        </div>
        <div className="stars-group">
          <div className="stars1">
            <img className="star-icon5" alt="" src="/star.svg" />
            <img className="star-icon6" alt="" src="/star.svg" />
            <img className="star-icon7" alt="" src="/star.svg" />
            <img className="star-icon8" alt="" src="/star.svg" />
            <img className="star-icon9" alt="" src="/star.svg" />
          </div>
          <div className="div3">(16)</div>
        </div>
        <div className="div4">$50</div>
      </div>
    </div>
  );
};

Product6.propTypes = {
  className: PropTypes.string,
  pngwing1: PropTypes.string,
  playStation: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propBackground: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Product6;
