import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  playStation,
  propMinWidth,
  propDisplay,
}) => {
  const playStationStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div className={`frame-group ${className}`}>
      <div className="playstation-parent">
        <h3 className="playstation" style={playStationStyle}>
          {playStation}
        </h3>
        <img className="heart-icon" alt="" src="/heart.svg" />
      </div>
      <div className="stars-parent">
        <div className="stars">
          <img className="star-icon" loading="lazy" alt="" src="/star.svg" />
          <img className="star-icon1" alt="" src="/star.svg" />
          <img className="star-icon2" alt="" src="/star.svg" />
          <img className="star-icon3" alt="" src="/star.svg" />
          <img className="star-icon4" alt="" src="/star.svg" />
        </div>
        <div className="empty-rating">(16)</div>
      </div>
      <div className="empty-info">$50</div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  playStation: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent5;
