import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress, faShopify, faMagento, faWix, faReact, faLaravel, faPhp } from "@fortawesome/free-brands-svg-icons";

const health = () => {
  const flipboxItems = [
    {
      title: "Dental",
      desc: "Showcase your expertise and commitment to patient care with a professional website. Educate your patients on a range of helpful topics around dental care.",
      icon: faWordpress,
      href: "/wordpress",
    },
    {
      title: "Optometry",
      desc: "With a custom-built website, you can be found quicker in search than DIY sites. And can position you as a thought leader with a blog.",
      icon: faShopify,
      href: "/shopify",
    },
    {
      title: "Chiropractors",
      desc: "Help your clients reach you faster with clickable phone numbers and straightforward appointment booking. And share how your treatments can assist with a comprehensive services page.",
      icon: faLaravel,
      href: "/woocommerce",
    },
    {
      title: "Physiotherapy",
      desc: "Imagine a client injuring themselves at basketball. They reach for their phone to find the nearest Physio. That’s why you need a mobile responsive website.",
      icon: faMagento,
      href: "/magento",
    },
    {
      title: "Private Medical Practitioner",
      desc: "GPs leveraged online appointments during the pandemic to prevent poor patient experience when reception staff were absent. And including the new patient registry online limits in-person contact.",
      icon: faWix,
      href: "/wix",
    },
    {
      title: "Dermatologist ",
      desc: "Improve your patient’s experience by avoiding waiting on hold to do basic tasks like updating their address or switching an appointment.",
      icon: faReact,
      href: "/react",
    },
    {
      title: "Private Hospitals ",
      desc: "A hospital stay is often not something people look forward to visiting. So a hospital website needs to balance compassion, education and engagement.",
      icon: faReact,
      href: "/react",
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Discover Healthcare and Hospital Websites That Position You as an Authority in the Medical Universe"}
        desc={
          <p>
            Are you looking to grow your practice as a trusted medical professional? A healthcare website that helps your local community find valuable and helpful information about symptoms,
            treatments and likely outcomes.
            <br />
            <br />
            Skyward Digital has been building healthcare websites as part of an overall marketing strategy that helps patients and clients get relevant information quickly.
            <br />
            <br />
            In addition, ensuring your website is optimised for SEO and speed will help future patients find you. And when they land on your website, you must deliver an unforgettable user experience.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <BriefService
        tab1i={<FontAwesomeIcon icon={faRotate} color={"#002eff"} fontSize={"30px"} />}
        tab1t={"Cross-browser compatible"}
        tab1d={"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others."}
        tab2i={<FontAwesomeIcon icon={faMobile} color={"#002eff"} fontSize={"30px"} />}
        tab2t={"Mobile Friendly"}
        tab2d={"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs."}
        tab3i={<FontAwesomeIcon icon={faBoltLightning} color={"#002eff"} fontSize={"30px"} />}
        tab3t={"Lightning Fast"}
        tab3d={"We design lightning fast websites that both search engines and users love."}
        tab4i={<FontAwesomeIcon icon={faGaugeSimpleHigh} color={"#002eff"} fontSize={"30px"} />}
        tab4t={"Conversion Optimised"}
        tab4d={"Our high-performance website designs are engineered to convert browsers into buyers."}
        title={"Trust the Experts in Healthcare Website Design"}
        desc={
          <div style={{ margin: "40px 0", textAlign: "left" }}>
            <div style={{ marginBottom: "25px" }}>
              <h3>Communicates</h3>
              <p>Your organisation’s voice, products and services, and mission.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3>Interactive features</h3>
              <p>for messaging and data exchange.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3>Appeals</h3>
              <p>to both existing and prospective users.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3>Discoverable</h3>
              <p>by prospective users through search engines.</p>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <h3> Complies</h3>
              <p>with all applicable security and regulatory standards – including HIPAA, ADA, GDPR, and CCPA.</p>
            </div>
          </div>
        }
      />
      <FlipBox
        items={flipboxItems}
        title={"Healthcare websites for doctors, surgeons, dentists, specialists and allied professionals"}
        desc={
          <p className="subtitle">
            Reliable and accurate healthcare information is essential to building trust as a dentist, local GP or hospital operator.
            <br />
            <br />
            Your healthcare website should help busy parents book an appointment for a sick child. Or if they have injured themselves playing footy on the weekend, they turn to your physio website to
            learn how to self-manage or if they should seek expert advice.
            <br />
            <br />
            And with every changing rule around Covid-19, patients use healthcare websites to stay informed about entry requirements to medical facilities.
          </p>
        }
      />
      <Testimonials padding={"0 0 70px"} />
      <CaseStudies />
    </React.Fragment>
  );
};

export default health;
