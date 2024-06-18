import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Product1.css";

const Product1 = ({
  className = "",
  rectangle50,
  kidsToys,
  needs,
  propTop,
  propLeft,
  propHeight,
  propDisplay,
  propColor,
}) => {
  const product33Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const kidsToysContainer2Style = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const uSD10010002Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`product38 ${className}`} style={product33Style}>
      <div className="card-design8">
        <div className="card-designkids2">
          <img
            className="card-designkids-item"
            loading="lazy"
            alt=""
            src={rectangle50}
          />
          <h2 className="kids-toys-container2" style={kidsToysContainer2Style}>
            <p className="kids-toys2">{kidsToys}</p>
            <p className="needs2">{needs}</p>
          </h2>
          <div className="usd-100-100014" style={uSD10010002Style}>
            USD $100 -$1000
          </div>
        </div>
      </div>
      <h3 className="popular-card8">Popular Card</h3>
      <div className="background-parent4">
        <div className="background16">
          <div className="container16">
            <div className="online8">Online</div>
          </div>
        </div>
        <div className="background17">
          <div className="container17">
            <div className="in-store8">In-Store</div>
          </div>
        </div>
      </div>
      <div className="adidas-wrapper5">
        <div className="adidas8">Adidas</div>
      </div>
    </div>
  );
};

Product1.propTypes = {
  className: PropTypes.string,
  rectangle50: PropTypes.string,
  kidsToys: PropTypes.string,
  needs: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propColor: PropTypes.any,
};

export default Product1;
