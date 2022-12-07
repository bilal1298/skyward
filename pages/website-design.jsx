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
      <BriefService />
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
