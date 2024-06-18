import FrameComponent5 from "./FrameComponent5";
import Product6 from "./Product6";
import Product5 from "./Product5";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`popular-products-container-parent ${className}`}>
      <div className="popular-products-container">
        <h1 className="discover-our-popular">Discover Our Popular Products</h1>
        <div className="explore-a-variety">Explore a Variety of Options</div>
      </div>
      <div className="product-cards-container">
        <div className="product42">
          <div className="card-design11">
            <div className="card-design1-child" />
            <div className="wishdeck-giftcards-group">
              <h2 className="wishdeck-giftcards1">
                <p className="wishdeck1">WishDeck</p>
                <p className="giftcards1">GiftCards</p>
              </h2>
              <div className="usd-100-10003">USD $100 -$1000</div>
            </div>
            <img
              className="pngwing-1-icon2"
              loading="lazy"
              alt=""
              src="/pngwing-1@2x.png"
            />
          </div>
          <FrameComponent5 playStation="Clothes" />
        </div>
        <Product6 pngwing1="/pngwing-1-1@2x.png" playStation="Shoes" />
        <Product6
          pngwing1="/pngwing-1-2@2x.png"
          playStation="Toys"
          propLeft="1136px"
          propBackground="linear-gradient(180deg, #ff8796, #feba95)"
          propHeight="268.5px"
          propMinWidth="49px"
        />
        <div className="product43">
          <div className="card-design41">
            <div className="card-design4-child" />
            <div className="card-design4-inner">
              <div className="wishdeck-giftcards-container">
                <h2 className="wishdeck-giftcards2">
                  <p className="wishdeck2">WishDeck</p>
                  <p className="giftcards2">GiftCards</p>
                </h2>
                <div className="usd-100-10004">USD $100 -$1000</div>
              </div>
            </div>
            <div className="pngwing-1-wrapper">
              <img
                className="pngwing-1-icon3"
                alt=""
                src="/pngwing-1-3@2x.png"
              />
            </div>
          </div>
          <FrameComponent5
            playStation="Makeup"
            propMinWidth="89px"
            propDisplay="inline-block"
          />
        </div>
        <div className="product44">
          <div className="card-design-anniversay">
            <div className="card-design-anniversay-child" />
            <div className="card-design-anniversay-inner">
              <div className="frame-parent3">
                <div className="anniversary-gift-card-wrapper">
                  <h2 className="anniversary-gift-card-container">
                    <p className="anniversary">{`Anniversary `}</p>
                    <p className="gift-card">Gift Card</p>
                  </h2>
                </div>
                <div className="div7">$100</div>
              </div>
            </div>
            <img
              className="pngwing-6-icon"
              loading="lazy"
              alt=""
              src="/pngwing-6@2x.png"
            />
          </div>
          <FrameComponent5
            playStation="Anniverssay"
            propMinWidth="unset"
            propDisplay="unset"
          />
        </div>
        <div className="product45">
          <div className="card-design-fenty1">
            <div className="card-design-fenty-item" />
            <img
              className="mask-group-icon3"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="usd-100-1000-container">
              <div className="usd-100-10005">USD $100 -$1000</div>
            </div>
          </div>
          <FrameComponent5
            playStation="Fenty"
            propMinWidth="60px"
            propDisplay="inline-block"
          />
        </div>
        <div className="product46">
          <div className="card-design-nike">
            <div className="card-design-nike-child" />
            <div className="image-1-wrapper">
              <img
                className="image-1-icon"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className="usd-100-10006">USD $100 -$1000</div>
          </div>
          <FrameComponent5
            playStation="Nike"
            propMinWidth="50px"
            propDisplay="inline-block"
          />
        </div>
        <Product5
          rectangle50="/rectangle-50@2x.png"
          kidsToys="Kids Toys"
          needs={`& Needs`}
          playStation="Kids Toys"
        />
        <Product5
          rectangle50="/rectangle-50-1@2x.png"
          kidsToys={`Shoes &`}
          needs="Wallets"
          playStation="Shoes and Wallets"
          propLeft="1136px"
          propWidth="162.4px"
          propMinWidth="unset"
          propWidth1="200px"
        />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
