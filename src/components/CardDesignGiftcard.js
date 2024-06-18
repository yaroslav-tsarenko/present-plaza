import PropTypes from "prop-types";
import "./CardDesignGiftcard.css";

const CardDesignGiftcard = ({ className = "" }) => {
  return (
    <div className={`card-design-giftcard ${className}`}>
      <img
        className="banner-background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-501@2x.png"
      />
      <div className="card-design-giftcard-inner">
        <div className="gift-parent">
          <h1 className="gift">GIFT</h1>
          <div className="card-wrapper">
            <h1 className="card">CARD</h1>
          </div>
        </div>
      </div>
      <img className="icons8-bow-99-1" alt="" src="/icons8bow99-1@2x.png" />
      <div className="banner-description">$100</div>
    </div>
  );
};

CardDesignGiftcard.propTypes = {
  className: PropTypes.string,
};

export default CardDesignGiftcard;
