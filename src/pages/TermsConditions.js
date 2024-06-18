import Header from "../components/header/Header";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop from "../components/FooterDesktop";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <Header />
      <div className="terms-conditions-parent">
        <h1 className="terms-conditions1">{`Terms & Conditions`}</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </div>
      <main className="terms-content">
        <div className="welcome-to-lilylamb">
          Welcome to LilyLamb Kids These Terms and Conditions ("Terms") govern
          your use of our website, products, and services. By accessing or using
          any part of our website or services, you agree to abide by these
          Terms.
        </div>
        <section className="acceptance-of-terms-parent">
          <h1 className="acceptance-of-terms-container">
            <ol className="acceptance-of-terms">
              <li>Acceptance of Terms</li>
            </ol>
          </h1>
          <div className="please-read-these">
            Please read these Terms carefully before using our services. Your
            use of our services indicates your acceptance of these Terms and
            your agreement to comply with them. If you do not agree with any
            part of these Terms, you may not use our services.
          </div>
        </section>
        <FrameComponent
          useOfServices="Use of Services"
          eligibility="2.1 Eligibility"
          toUseOurServicesYouMustBe="To use our services, you must be at least 18 years old and capable of forming a binding contract. By using our services, you represent and warrant that you meet these eligibility requirements."
          accountCreation="2.2 Account Creation"
          someOfOurServicesMayRequi="Some of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        />
        <section className="privacy-policy-parent">
          <h1 className="privacy-policy">
            <ol className="privacy-policy1">
              <li>Privacy Policy</li>
            </ol>
          </h1>
          <div className="our-privacy-policy">
            Our Privacy Policy governs the collection, use, and sharing of your
            personal information when you use our services. By using our
            services, you consent to the practices described in our Privacy
            Policy.
          </div>
        </section>
        <FrameComponent
          useOfServices="Intellectual Property"
          eligibility="4.1 Ownership"
          toUseOurServicesYouMustBe="All content, materials, and intellectual property on our website and within our services are owned or licensed by LilyLamb Kids. You may not use, reproduce, or distribute any of our content without our express written permission."
          accountCreation="4.2 Trademarks"
          someOfOurServicesMayRequi=" Any trademarks, logos, or service marks displayed on our website are the property of LilyLamb Kids or their respective owners. You may not use these marks without our prior written consent or the consent of the respective owners."
          propWidth="1830px"
          propWidth1="1802px"
        />
        <section className="service-availability-parent">
          <h1 className="service-availability">
            <ol className="service-availability1">
              <li>Service Availability</li>
            </ol>
          </h1>
          <div className="we-strive-to">
            We strive to provide reliable services, but we do not guarantee
            uninterrupted or error-free operation of our website or services. We
            reserve the right to modify or discontinue our services at any time
            without notice.
          </div>
        </section>
        <section className="user-conduct-parent">
          <h1 className="user-conduct">
            <ol className="user-conduct1">
              <li>User Conduct</li>
            </ol>
          </h1>
          <div className="you-agree-to">
            You agree to use our services for lawful purposes and in compliance
            with these Terms. You may not engage in any activity that violates
            applicable laws or infringes on the rights of others.
          </div>
        </section>
        <section className="termination-parent">
          <h1 className="termination">
            <ol className="termination1">
              <li>Termination</li>
            </ol>
          </h1>
          <div className="we-reserve-the">
            We reserve the right to terminate or suspend your access to our
            services at our discretion, without prior notice, for any violation
            of these Terms or for any other reason.
          </div>
        </section>
        <section className="limitation-of-liability-parent">
          <h1 className="limitation-of-liability-container">
            <ol className="limitation-of-liability">
              <li>Limitation of Liability</li>
            </ol>
          </h1>
          <div className="to-the-fullest">
            To the fullest extent permitted by law, LilyLamb Kids and its
            affiliates shall not be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from your use of our
            services.
          </div>
        </section>
        <section className="governing-law-parent">
          <h1 className="governing-law">
            <ol className="governing-law1">
              <li>Governing Law</li>
            </ol>
          </h1>
          <div className="these-terms-are">
            These Terms are governed by and construed in accordance with the
            laws of [Your Jurisdiction]. Any disputes arising from these Terms
            or your use of our services shall be subject to the exclusive
            jurisdiction of the courts of law.
          </div>
        </section>
        <div className="contact-us-parent">
          <h1 className="contact-us">
            <ol className="contact-us1">
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className="if-you-have-container">
            <p className="if-you-have">
              If you have any questions or concerns about these Terms or our
              services, please contact us at hello@cryptoclouds.com.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="thank-you-for">
              Thank you for choosing LilyLamb Kids.
            </p>
            <p className="we-hope-you">
              {" "}
              We hope you enjoy our services and find them valuable for your
              crypto endeavors.
            </p>
          </div>
        </div>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default TermsConditions;
