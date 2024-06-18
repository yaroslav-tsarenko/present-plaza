import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import OfferButtons from "./OfferButtons";
import PropTypes from "prop-types";
import "./UserOffer.css";

const UserOffer = ({ className = "" }) => {
  return (
    <div className={`user-offer ${className}`}>
      <div className="personalized-card">
        <div className="personalized-card-details">
          <h1 className="personalized-gift-card">Personalized Gift Card</h1>
          <div className="card-rating">
            <div className="stars3">
              <img
                className="star-icon15"
                loading="lazy"
                alt=""
                src="/star.svg"
              />
              <img className="star-icon16" alt="" src="/star.svg" />
              <img className="star-icon17" alt="" src="/star.svg" />
              <img className="star-icon18" alt="" src="/star.svg" />
              <img className="star-icon19" alt="" src="/star.svg" />
            </div>
            <div className="rating-elements">
              <div className="rating-icons" />
            </div>
            <div className="rating-elements1">
              <div className="ratings">10 ratings</div>
            </div>
            <div className="rating-elements2">
              <div className="rating-elements-child" />
            </div>
            <div className="rating-elements3">
              <div className="reviews3">5 reviews</div>
            </div>
          </div>
        </div>
        <div className="card-info-tabs">
          <h3 className="description">Description</h3>
          <h3 className="product-info1">Product Info</h3>
          <h3 className="more-info">More Info</h3>
        </div>
      </div>
      <div className="card-description">
        <div className="our-personalized-gift-container">
          <p className="our-personalized-gift">
            Our personalized gift cards are the perfect solution for any
            occasion, whether it's a birthday, anniversary, holiday, or special
            milestone. With our customizable options, you can create a unique
            and thoughtful gift that reflects the recipient's personality and
            interests.
          </p>
          <p className="each-gift-card">
            Each gift card is beautifully designed and printed on high-quality
            cardstock, ensuring a luxurious feel and presentation. Choose from a
            variety of stylish templates and add your own heartfelt message to
            make the gift even more memorable.
          </p>
        </div>
      </div>
      <div className="delivery-method">
        <h3 className="customize-gift-cards">Customize Gift Cards</h3>
        <div className="domination-input">
          <div className="enter-domination-min-container">
            <span className="enter-domination">
              <span className="enter-domination1">Enter Domination</span>
              <span className="span">{` `}</span>
            </span>
            <span className="min-5-">(Min $5 - Max $1000)</span>
          </div>
          <div className="button10">
            <img className="tag-icon2" alt="" src="/tag-icon.svg" />
            <div className="button11">{`Amount `}</div>
            <img className="tag-icon3" alt="" src="/tag-icon.svg" />
          </div>
        </div>
        <div className="gifting-details-content-wrapper">
          <div className="gifting-details-content">
            <div className="gifting-details-gift-container">
              <span className="gifting-details">Gifting Details</span>
              <span className="gift-card-details">
                {" "}
                (Gift Card details will be sent via sms)
              </span>
            </div>
            <div className="details-buttons">
              <TextField
                className="button12"
                placeholder="Recipient's Name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#000" },
                  "& .MuiInputBase-root": { height: "54px" },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="button13">
                <img className="tag-icon4" alt="" src="/tag-icon.svg" />
                <div className="button14">
                  <span>Recipient's Email</span>
                  <span className="span1">{` `}</span>
                </div>
                <img className="tag-icon5" alt="" src="/tag-icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="more-details-buttons">
          <div className="button15">
            <img className="tag-icon6" alt="" src="/tag-icon.svg" />
            <div className="button16">Recipient's Mobile No</div>
            <img className="tag-icon7" alt="" src="/tag-icon.svg" />
          </div>
          <TextField
            className="button17"
            placeholder="Voucher Code"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": { height: "54px" },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <textarea
          className="button18"
          placeholder="Message to Recipient (Optional) "
          rows={10}
          cols={41}
        />
      </div>
      <div className="secondary-action-button">
        <Button
          className="button19"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1c1c1c",
            fontSize: "16",
            background: "#ffb703",
            borderRadius: "4px",
            "&:hover": { background: "#ffb703" },
          }}
        >
          Redeem Now
        </Button>
      </div>
      <div className="offer-banner">
        <div className="receipt-discount-wrapper">
          <img
            className="receipt-discount-icon"
            loading="lazy"
            alt=""
            src="/receiptdiscount.svg"
          />
        </div>
        <h3 className="offers">Offers</h3>
      </div>
      <OfferButtons getFlat10OffForFirstTimeU="Get Flat 10% off for first time users" />
      <OfferButtons getFlat10OffForFirstTimeU="Get Flat 15% Cashback, Use Code LOYAL" />
      <div className="button20">
        <img className="tag-icon8" alt="" src="/tag-icon.svg" />
        <div className="cashback-content">
          <div className="cashback-details">
            <div className="get-up-to-15">
              Get up-to 15% cashback on a transaction with wallet.
            </div>
          </div>
          <img className="arrow-down-icon1" alt="" src="/arrowdown.svg" />
        </div>
        <img className="tag-icon9" alt="" src="/tag-icon.svg" />
      </div>
    </div>
  );
};

UserOffer.propTypes = {
  className: PropTypes.string,
};

export default UserOffer;
