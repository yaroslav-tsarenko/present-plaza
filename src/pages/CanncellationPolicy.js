import Header1 from "../components/Header1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./CanncellationPolicy.css";

const CanncellationPolicy = () => {
  return (
    <div className="canncellationpolicy">
      <Header1 />
      <section className="cancellation-policy-parent">
        <h1 className="cancellation-policy">Cancellation Policy</h1>
        <div className="please-refer-to1">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <section className="cancellation-details">
        <FrameComponent2 />
        <FrameComponent1 />
        <div className="cancellation-process-parent">
          <h1 className="cancellation-process">
            <ol className="cancellation-process1">
              <li>Cancellation Process</li>
            </ol>
          </h1>
          <div className="to-cancel-your">
            To cancel your booking or subscription, please contact our customer
            support team via [email/phone/chat] with your order details and
            reason for cancellation. Our team will guide you through the
            cancellation process and provide assistance as needed. Please ensure
            to cancel your booking or subscription before the start date of the
            service to avoid any cancellation fees or penalties.
          </div>
        </div>
        <div className="refund-processing-time-parent">
          <h1 className="refund-processing-time-container">
            <ol className="refund-processing-time">
              <li> Refund Processing Time</li>
            </ol>
          </h1>
          <div className="refunds-for-eligible">
            Refunds for eligible cancellations will be processed within [Y]
            business days from the date of cancellation confirmation. The time
            taken for the refund to reflect in your account may vary depending
            on your payment method and financial institution.
          </div>
        </div>
        <div className="exceptions-and-special-circums-parent">
          <h1 className="exceptions-and-special-container">
            <ol className="exceptions-and-special-circums">
              <li>Exceptions and Special Circumstances</li>
            </ol>
          </h1>
          <div className="certain-services-or">
            Certain services or products may have specific cancellation terms
            and conditions that supersede the general policy. In cases of force
            majeure, such as natural disasters, government regulations, or other
            unforeseen circumstances beyond our control, refund eligibility and
            cancellation terms may be adjusted accordingly.
          </div>
        </div>
        <div className="changes-to-bookings-parent">
          <h1 className="changes-to-bookings-container">
            <ol className="changes-to-bookings">
              <li>Changes to Bookings</li>
            </ol>
          </h1>
          <div className="you-have-the">
            Changes to bookings or subscriptions may be permitted depending on
            availability and the terms associated with the service or product.
            Please contact our customer support team for assistance with any
            changes to your booking or subscription.
          </div>
        </div>
        <div className="policy-updates-parent">
          <h1 className="policy-updates">
            <ol className="policy-updates1">
              <li> Policy Updates</li>
            </ol>
          </h1>
          <div className="this-cancellation-and">
            This cancellation and refund policy is subject to change without
            prior notice.We encourage you to review the policy periodically to
            stay informed about any updates or modifications.
          </div>
        </div>
        <div className="contact-us-group">
          <h1 className="contact-us2">
            <ol className="contact-us3">
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className="if-you-have1">
            If you have any questions or require further clarification regarding
            our cancellation and refund policy, please don't hesitate to contact
            our customer support team.
          </div>
        </div>
      </section>
      <FooterDesktop1 />
    </div>
  );
};

export default CanncellationPolicy;
