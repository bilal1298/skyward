import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import TypesOfWeb from "../components/ServicesPage/TypesOfWeb";
import TrustedBy from "../components/HomePage/TrustedBy";
import Technologies from "../components/ServicesPage/Technologies";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Contact from "../components/HomePage/Contact";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const websitedesign = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Web Design To Propel And Power Your Business Around Your Universe"}
        desc={
          <p>
            Our web design service helps local businesses, service providers, and eCommerce website owners with substandard websites grow their leads, convert more clients and increase revenue.
            <br />
            <br />
            We reimagine your website with cost-effective packages and transparent reporting to ignite your business.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <BriefService
        tab1i={<FontAwesomeIcon icon={faRotate} color={"#002eff"} fontSize={"30px"}/>}
        tab1t={"Cross-browser compatible"}
        tab1d={"Our designs work seamlessly on all popular browsers like Google Chrome, Safari, Internet Explorer, & Firefox, among others."}
        tab2i={<FontAwesomeIcon icon={faMobile} color={"#002eff"} fontSize={"30px"}/>}
        tab2t={"Mobile Friendly"}
        tab2d={"We create websites that adapt flawlessly to various screen sizes, and across devices like mobiles, tablets and PCs."}
        tab3i={<FontAwesomeIcon icon={faBoltLightning} color={"#002eff"} fontSize={"30px"}/>}
        tab3t={"Lightning Fast"}
        tab3d={"We design lightning fast websites that both search engines and users love."}
        tab4i={<FontAwesomeIcon icon={faGaugeSimpleHigh} color={"#002eff"} fontSize={"30px"}/>}
        tab4t={"Conversion Optimised"}
        tab4d={"Our high-performance website designs are engineered to convert browsers into buyers."}
        title={"Is Your Website Ready for Blast-Off To Soar Your Sales?"}
        desc={
          <p className="subtitle">
            Fast, mobile-first websites that create a memorable spaceflight…we mean… experience. Whether you are a GP, tradie, or eCommerce store owner, your website is your mothership. Often it's the
            first place prospects arrive from social media, SEO and paid ads. <br />
            <br />
            Asides from building visually stunning websites, we prioritise a positive and engaging experience to help you rank highly. Skyward Digital web design balances SEO and UX to get the right
            traffic and drive engagement, propelling customers deeper on their digital journey.
            <br />
            <br />
            At Skyward Digital, we understand when we lift the hood on your rocket (website) how to bring together your brand, business and customers to impact your results.
          </p>
        }
      />
      <TypesOfWeb />
      <TrustedBy />
      <Technologies />
      <Testimonials />
      <CaseStudies />
      <Contact />
    </React.Fragment>
  );
};

export default websitedesign;
