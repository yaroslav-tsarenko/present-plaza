import { Button } from "@mui/material";
import IconBlock1 from "./IconBlock1";
import PropTypes from "prop-types";
import "./IconBlock.css";

const IconBlock = ({ className = "" }) => {
  return (
    <section className={`icon-block-2 ${className}`}>
      <div className="title1">
        <h1 className="why-choose-giftcard">Why Choose GiftCard Haven?</h1>
        <div className="your-trusted-source">
          Your Trusted Source for the Perfect Gift
        </div>
        <Button
          className="button2"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1c1c1c",
            fontSize: "16",
            background: "#ffb703",
            borderRadius: "4px",
            "&:hover": { background: "#ffb703" },
            width: 155,
            height: 54,
          }}
        >
          Explore Now
        </Button>
      </div>
      <div className="benefits-container">
        <div className="benefit-blocks">
          <IconBlock1
            icon="/icon.svg"
            valueForMoney="Value for Money"
            weOfferCompetitivePricesO="We offer competitive prices on millions of items"
          />
          <IconBlock1
            icon="/icon-1.svg"
            valueForMoney="Shoppers worldwide"
            weOfferCompetitivePricesO={`More than 300 thousand shoppers from 200+ countries & regions`}
            propWidth="66px"
            propLineHeight="135%"
          />
        </div>
        <div className="benefit-blocks1">
          <IconBlock1
            icon="/icon-2.svg"
            valueForMoney="Fast Delivery"
            weOfferCompetitivePricesO="Faster Dlivery on selected items thanks to our improved logistics"
            propWidth="87px"
            propLineHeight="135%"
          />
          <IconBlock1
            icon="/icon-3.svg"
            valueForMoney="Safe Payments"
            weOfferCompetitivePricesO="Safe Payment methods preferred by international shoppers"
            propWidth="87px"
            propLineHeight="22px"
          />
        </div>
      </div>
    </section>
  );
};

IconBlock.propTypes = {
  className: PropTypes.string,
};

export default IconBlock;
