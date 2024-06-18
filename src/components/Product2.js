import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product2.css";

const Product2 = ({ className = "", propTop, propLeft }) => {
  const product32Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`product37 ${className}`} style={product32Style}>
      <div className="card-design7">
        <div className="card-design-holiday">
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
          <div className="holiday-gift-voucher-wrapper">
            <h1 className="holiday-gift-voucher-container">
              <p className="holiday">{`Holiday `}</p>
              <p className="gift-voucher">Gift Voucher</p>
            </h1>
          </div>
          <div className="peru-parent">
            <h1 className="peru">PERU</h1>
            <b className="separator1">$600</b>
          </div>
        </div>
      </div>
      <h3 className="popular-card7">Popular Card</h3>
      <div className="background-parent3">
        <div className="background14">
          <div className="container14">
            <div className="online7">Online</div>
          </div>
        </div>
        <div className="background15">
          <div className="container15">
            <div className="in-store7">In-Store</div>
          </div>
        </div>
      </div>
      <div className="adidas-wrapper4">
        <div className="adidas7">Adidas</div>
      </div>
    </div>
  );
};

Product2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Product2;
