import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./MissionContainer.css";

const MissionContainer = ({ className = "" }) => {
  return (
    <div className={`mission-container ${className}`}>
      <div className="join-us-on-our-mission-parent">
        <div className="join-us-on">Join us on Our Mission</div>
        <h1 className="ready-to-find">Ready to Find the Perfect Gift?</h1>
        <div className="we-invite-you">
          Explore our wide range of gift cards and make every occasion special
          with GiftCard Haven.
        </div>
        <div className="enter-your-email-parent">
          <div className="enter-your-email">Enter Your Email</div>
          <Button
            className="button4"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1c1c1c",
              fontSize: "16",
              background: "#fabe06",
              borderRadius: "4px",
              "&:hover": { background: "#fabe06" },
              width: 145,
              height: 54,
            }}
          >
            Get Notified
          </Button>
        </div>
      </div>
    </div>
  );
};

MissionContainer.propTypes = {
  className: PropTypes.string,
};

export default MissionContainer;
