import Header1 from "../components/Header1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FooterDesktop from "../components/FooterDesktop";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <Header1 />
      <section className="footer-container">
        <div className="footer-container-inner">
          <FrameComponent3 />
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <FrameComponent2 />
        </div>
      </section>
      <FooterDesktop />
    </div>
  );
};

export default Payment;
