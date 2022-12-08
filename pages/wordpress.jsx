import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import Technologies from "../components/ServicesPage/Technologies";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Contact from "../components/HomePage/Contact";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const wordpress = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Accelerate Your Business’s Transformation With the WordPress Website Design Experts"}
        desc={
          <p>
            Get found easily on the web with a website that is interactive, captivating, and optimised for search.
            <br />
            <br />
            From enterprise websites and blogs to applications and complex portals. Wordpress is a great choice to power any website.
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
        title={"Create a high-converting site optimised for search with Skyward’s professional WordPress design and development services"}
        desc={
          <p className="subtitle">
            WordPress offers a simple platform to manage your website. But if you’re looking for a custom WordPress website, you need an expert designer and developer to help. This way, you will get
            what you were looking for without learning code.
            <br />
            <br />
            Skyward Digital has built hundreds of custom WordPress websites. With a range of plugins to help you get found in search. And WordPress makes it easy for customers to click on your online
            store from social media.
            <br />
            <br />
            It’s no wonder WordPress powers nearly half the world’s websites. So if you need an online store, a small business website or even a healthcare website, then WordPress is a proven and
            reliable solution.
          </p>
        }
      />
      <Technologies />
      <Testimonials />
      <CaseStudies />
      <Contact />
    </React.Fragment>
  );
};

export default wordpress;
