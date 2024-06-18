import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`categories-container-wrapper ${className}`}>
      <div className="categories-container">
        <div className="category-wrapper">
          <div className="category">
            <img
              className="category-icons"
              loading="lazy"
              alt=""
              src="/category-icons@2x.png"
            />
            <div className="category-text">
              <div className="gaming">Gaming</div>
            </div>
          </div>
        </div>
        <div className="category-container">
          <div className="category1">
            <img
              className="category-icons1"
              alt=""
              src="/category-icons-1@2x.png"
            />
            <div className="category-text1">
              <div className="sports">Sports</div>
            </div>
          </div>
        </div>
        <div className="category-frame">
          <div className="category2">
            <img
              className="category-icons2"
              alt=""
              src="/category-icons-2@2x.png"
            />
            <div className="category-text2">
              <div className="celebration">Celebration</div>
            </div>
          </div>
        </div>
        <div className="category-wrapper1">
          <div className="category3">
            <img
              className="category-icons3"
              alt=""
              src="/category-icons-3@2x.png"
            />
            <div className="category-text3">
              <div className="jewellery">Jewellery</div>
            </div>
          </div>
        </div>
        <div className="category-wrapper2">
          <div className="category4">
            <img
              className="category-icons4"
              alt=""
              src="/category-icons-4@2x.png"
            />
            <div className="category-text4">
              <div className="electronics">Electronics</div>
            </div>
          </div>
        </div>
        <div className="category-wrapper3">
          <div className="category5">
            <img
              className="category-icons5"
              alt=""
              src="/category-icons-5@2x.png"
            />
            <div className="category-text5">
              <div className="fashion">Fashion</div>
            </div>
          </div>
        </div>
        <div className="category-wrapper4">
          <div className="category6">
            <img
              className="category-icons6"
              alt=""
              src="/category-icons-6@2x.png"
            />
            <div className="category-text6">
              <div className="shopping">Shopping</div>
            </div>
          </div>
        </div>
        <div className="category-wrapper5">
          <div className="category7">
            <img
              className="category-icons7"
              alt=""
              src="/category-icons-7@2x.png"
            />
            <div className="category-text7">
              <div className="food">Food</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
