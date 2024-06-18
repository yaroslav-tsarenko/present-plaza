import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop from "../components/FooterDesktop";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-1920">
      <FrameComponent1 checkout="Checkout" />
      <section className="checkout-1920-inner">
        <div className="frame-parent">
          <FrameComponent />
          <div className="checkout">
            <TextField
              className="header"
              placeholder="Checkout"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="checkout-details">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <Button
                className="button"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1c1c1c",
                  fontSize: "16",
                  background: "#fabe06",
                  borderRadius: "4px",
                  "&:hover": { background: "#fabe06" },
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FooterDesktop />
    </div>
  );
};

export default Checkout;
