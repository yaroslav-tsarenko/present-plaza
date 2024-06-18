import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Bg.css";

const Bg = ({ className = "" }) => {
  return (
    <section className={`bg ${className}`}>
      <div className="ellipse-parent">
        <div className="frame-item" />
        <div className="ellipse-group">
          <div className="frame-inner" />
          <img className="pngwing-7-icon" alt="" src="/pngwing-7@2x.png" />
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-10@2x.png"
          />
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="ellipse-div" />
          <div className="slogan-container">
            <div className="ellipse-container">
              <div className="frame-child1" />
              <h1 className="your-one-stop-shop">
                Your One-Stop Shop for the Perfect Gift
              </h1>
            </div>
            <Button
              className="button1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1c1c1c",
                fontSize: "16",
                background: "#ffb703",
                borderRadius: "4px",
                "&:hover": { background: "#ffb703" },
                width: 200,
                height: 54,
              }}
            >
              Shop With Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Bg.propTypes = {
  className: PropTypes.string,
};

export default Bg;
