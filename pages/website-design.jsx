import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import TypesOfWeb from "../components/ServicesPage/TypesOfWeb";
import TrustedBy from "../components/HomePage/TrustedBy"
import Technologies from "../components/ServicesPage/Technologies";
import Testimonials from "../components/HomePage/Testimonials"
import CaseStudies from "../components/HomePage/CaseStudies"
import Contact from "../components/HomePage/Contact"

const websitedesign = () => {
  return (
    <React.Fragment>
        <ServicesBanner />
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
