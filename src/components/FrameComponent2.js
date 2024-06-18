import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`brand-exploration-container-wrapper ${className}`}>
      <div className="brand-exploration-container">
        <h1 className="explore-exclusive-gifts">
          Explore Exclusive Gifts from Top Brands
        </h1>
        <div className="frame-parent4">
          <img
            className="frame-icon"
            loading="lazy"
            alt=""
            src="/frame-713@2x.png"
          />
          <img
            className="frame-child2"
            loading="lazy"
            alt=""
            src="/frame-714@2x.png"
          />
          <img
            className="frame-child3"
            loading="lazy"
            alt=""
            src="/frame-715@2x.png"
          />
          <img
            className="frame-child4"
            loading="lazy"
            alt=""
            src="/frame-717@2x.png"
          />
          <img
            className="frame-child5"
            loading="lazy"
            alt=""
            src="/frame-718@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
