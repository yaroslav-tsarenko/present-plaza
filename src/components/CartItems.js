import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ItemInfo from "./ItemInfo";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="items-container">
        <div className="item-container">
          <div className="cart-footer">
            <div className="header7">
              <div className="header-item" />
              <div className="header-labels">
                <div className="product5">Product</div>
              </div>
              <div className="header-labels1">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="cart-item">
              <div className="wrapper-product-thumbnail">
                <img
                  className="product-thumbnail-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4554@2x.png"
                />
              </div>
              <div className="product-info">
                <div className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="item-pricing">
                <div className="item-price">
                  <div className="price-value">$120.00</div>
                  <div className="credits1">12 Credits</div>
                </div>
                <div className="quantity-adjust">
                  <div className="adjust-buttons">
                    <div className="quantity-icons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className="icon-separator">3</div>
                    <input className="quantity-icons1" type="checkbox" />
                  </div>
                  <FormControl
                    className="item-time"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fabe06",
                      borderRadius: "8px",
                      width: "100%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#1c1c1c",
                        fontSize: 18,
                        fontWeight: "Regular",
                        fontFamily: "Avenir Next LT Pro",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "16px",
                      },
                    }}
                  >
                    <InputLabel color="warning" />
                    <Select
                      color="warning"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/time-input.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Hourly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className="separator">$120.00</div>
            </div>
          </div>
          <ItemInfo shoppingSpreeGiftCard="Shopping Spree Gift Card" />
          <ItemInfo
            shoppingSpreeGiftCard="Travel GiftCard"
            propLineHeight="22px"
          />
          <div className="cart-actions">
            <div className="action-divider" />
            <div className="action-buttons">
              <Button
                className="button7"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 129,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button8"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1c1c1c",
                  fontSize: "18",
                  background: "#fabe06",
                  borderRadius: "4px",
                  "&:hover": { background: "#fabe06" },
                  width: 139,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="checkout-header">
            <div className="header8">
              <div className="checkout-details5">Checkout Details</div>
            </div>
          </div>
          <div className="total-details">
            <div className="total-labels">
              <div className="cart-subtotal1">Cart Subtotal</div>
              <div className="total-separator">$360.00</div>
            </div>
          </div>
          <div className="additional-charges">
            <div className="charges-list">
              <div className="charge-labels">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="other-taxes1">Other Taxes</div>
              </div>
              <div className="charge-labels1">
                <div className="div11">$0.00</div>
                <div className="div12">$0.00</div>
              </div>
            </div>
          </div>
          <div className="order-summary4">
            <div className="summary-divider1" />
          </div>
          <div className="total-details1">
            <div className="grand-total-parent">
              <div className="grand-total1">Grand Total</div>
              <div className="div13">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
