import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product5.css";

const Product5 = ({
  className = "",
  rectangle50,
  kidsToys,
  needs,
  playStation,
  propLeft,
  propWidth,
  propMinWidth,
  propWidth1,
}) => {
  const product41Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const kidsToysContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const playStation2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propMinWidth, propWidth1]);

  return (
    <div className={`product41 ${className}`} style={product41Style}>
      <div className="card-designkids">
        <img
          className="card-designkids-child"
          loading="lazy"
          alt=""
          src={rectangle50}
        />
        <h2 className="kids-toys-container" style={kidsToysContainerStyle}>
          <p className="kids-toys">{kidsToys}</p>
          <p className="needs">{needs}</p>
        </h2>
        <div className="usd-100-10002">USD $100 -$1000</div>
      </div>
      <div className="frame-parent2">
        <div className="playstation-container">
          <h3 className="playstation2" style={playStation2Style}>
            {playStation}
          </h3>
          <img className="heart-icon2" alt="" src="/heart.svg" />
        </div>
        <div className="stars-container">
          <div className="stars2">
            <img className="star-icon10" alt="" src="/star.svg" />
            <img className="star-icon11" alt="" src="/star.svg" />
            <img className="star-icon12" alt="" src="/star.svg" />
            <img className="star-icon13" alt="" src="/star.svg" />
            <img className="star-icon14" alt="" src="/star.svg" />
          </div>
          <div className="div5">(16)</div>
        </div>
        <div className="div6">$50</div>
      </div>
    </div>
  );
};

Product5.propTypes = {
  className: PropTypes.string,
  rectangle50: PropTypes.string,
  kidsToys: PropTypes.string,
  needs: PropTypes.string,
  playStation: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default Product5;
