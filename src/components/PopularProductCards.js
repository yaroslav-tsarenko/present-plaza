import PropTypes from "prop-types";
import "./PopularProductCards.css";

const PopularProductCards = ({
  className = "",
  rectangle50,
  shoes,
  wallets,
}) => {
  return (
    <div className={`popular-product-cards1 ${className}`}>
      <div className="card-designshoes">
        <img className="card-designshoes-child" alt="" src={rectangle50} />
        <h2 className="shoes-wallets-container">
          <p className="shoes">{shoes}</p>
          <p className="wallets">{wallets}</p>
        </h2>
        <div className="usd-100-10008">USD $100 -$1000</div>
      </div>
    </div>
  );
};

PopularProductCards.propTypes = {
  className: PropTypes.string,
  rectangle50: PropTypes.string,
  shoes: PropTypes.string,
  wallets: PropTypes.string,
};

export default PopularProductCards;
