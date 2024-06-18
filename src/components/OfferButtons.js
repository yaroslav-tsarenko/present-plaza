import PropTypes from "prop-types";
import "./OfferButtons.css";

const OfferButtons = ({ className = "", getFlat10OffForFirstTimeU }) => {
  return (
    <div className={`offer-buttons ${className}`}>
      <div className="button9">
        <img className="tag-icon" alt="" src="/tag-icon.svg" />
        <div className="offer-button-content-parent">
          <div className="offer-button-content">
            <div className="get-flat-10">{getFlat10OffForFirstTimeU}</div>
          </div>
          <img className="arrow-down-icon" alt="" src="/arrowdown.svg" />
        </div>
        <img className="tag-icon1" alt="" src="/tag-icon.svg" />
      </div>
    </div>
  );
};

OfferButtons.propTypes = {
  className: PropTypes.string,
  getFlat10OffForFirstTimeU: PropTypes.string,
};

export default OfferButtons;
