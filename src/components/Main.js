import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <div className="content">
        <div className="sign-in">
          <div className="sign-in-content">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="form-fields">
            <div className="name-address-username">
              <div className="name-address-fields">
                <div className="your-name">Your Name</div>
              </div>
              <TextField
                className="email-country-password"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
            <div className="name-address-username1">
              <div className="address-wrapper">
                <div className="address">Address</div>
              </div>
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="email-country-input"
                  alt=""
                  src="/email-country-input.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <div className="username-parent">
                <div className="username">Username</div>
                <img
                  className="name-address-input"
                  alt=""
                  src="/frame-153-1.svg"
                />
              </div>
              <div className="password-parent">
                <div className="password">Password</div>
                <img className="frame-icon" alt="" src="/frame-153-2.svg" />
              </div>
            </div>
            <Button
              className="button1"
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
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-sign-up">
            <img
              className="social-buttons-icon"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-buttons-icon1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-buttons-icon2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
