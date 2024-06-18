import Product from "./Product";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./Recommendations.css";

const Recommendations = ({ className = "" }) => {
  return (
    <section className={`recommendations ${className}`}>
      <div className="recommendation-header-parent">
        <div className="recommendation-header">
          <h1 className="recommended-gift-cards">Recommended Gift-Cards</h1>
          <div className="treat-yourself-or">
            Treat yourself or a loved one to the latest trends in footwear.
          </div>
        </div>
        <div className="product-cards">
          <Product pngwing1="/pngwing-11@2x.png" />
          <Product
            pngwing1="/pngwing-1-11@2x.png"
            propBackground="linear-gradient(180deg, #fee5b1, #fff06e)"
          />
          <Product
            pngwing1="/pngwing-1-21@2x.png"
            propBackground="linear-gradient(180deg, #ff8796, #feba95)"
          />
          <div className="product48">
            <div className="card-design42">
              <div className="card-design4-item" />
              <div className="usd-100-1000-frame">
                <div className="usd-100-100011">USD $100 -$1000</div>
              </div>
              <div className="pngwing-1-parent">
                <img
                  className="pngwing-1-icon5"
                  alt=""
                  src="/pngwing-1-31@2x.png"
                />
                <h2 className="wishdeck-giftcards4">
                  <p className="wishdeck4">WishDeck</p>
                  <p className="giftcards4">GiftCards</p>
                </h2>
              </div>
            </div>
            <FrameComponent5
              playStation="PlayStation"
              propMinWidth="121px"
              propDisplay="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
