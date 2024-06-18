import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="sign-in-container">
        <div className="sign-in1">
          <div className="sign-in-fields">
            <div className="sign-in-title">
              <h1 className="sign-in2">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="input-fields">
              <div className="labels">
                <div className="username1">Username</div>
                <img className="inputs-icon" alt="" src="/frame-153-1.svg" />
              </div>
              <div className="labels1">
                <div className="password1">Password</div>
                <img className="labels-child" alt="" src="/frame-153-2.svg" />
              </div>
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1c1c1c",
                  fontSize: "16",
                  background: "#fabe06",
                  borderRadius: "4px",
                  "&:hover": { background: "#fabe06" },
                }}
              >
                Sign In
              </Button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="social-buttons">
              <img
                className="social-icons"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-icons1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-icons2"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
