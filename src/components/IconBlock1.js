import { useMemo } from "react";
import PropTypes from "prop-types";
import "./IconBlock1.css";

const IconBlock1 = ({
  className = "",
  icon,
  valueForMoney,
  weOfferCompetitivePricesO,
  propWidth,
  propLineHeight,
}) => {
  const iconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const weOfferCompetitiveStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={`icon-block-1 ${className}`}>
      <img
        className="icon"
        loading="lazy"
        alt=""
        src={icon}
        style={iconStyle}
      />
      <h3 className="value-for-money">{valueForMoney}</h3>
      <div className="we-offer-competitive" style={weOfferCompetitiveStyle}>
        {weOfferCompetitivePricesO}
      </div>
    </div>
  );
};

IconBlock1.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  valueForMoney: PropTypes.string,
  weOfferCompetitivePricesO: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propLineHeight: PropTypes.any,
};

export default IconBlock1;
