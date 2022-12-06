import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import Technologies from "../components/ServicesPage/Technologies";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Contact from "../components/HomePage/Contact";

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
      <BriefService />
      <Technologies />
      <Testimonials/>
      <CaseStudies />
      <Contact />
    </React.Fragment>
  );
};

export default wordpress;
