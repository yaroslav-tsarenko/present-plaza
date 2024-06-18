import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`summer-savings-container-wrapper ${className}`}>
      <div className="summer-savings-container">
        <div className="summer-savings-parent">
          <h1 className="summer-savings">Summer Savings</h1>
          <div className="enjoy-exclusive-discounts">
            Enjoy exclusive discounts on select gift cards this summer. Save big
            and give the perfect gift for any occasion.
          </div>
          <Button
            className="button3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: "16",
              background: "#ffb703",
              borderRadius: "4px",
              "&:hover": { background: "#ffb703" },
              width: 245,
              height: 54,
            }}
          >
            Start Your Gifting Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
