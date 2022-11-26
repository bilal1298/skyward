import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import TrustedBy from "../components/TrustedBy";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CaseStudies from "../components/CaseStudies";
import Industries from "../components/Industries";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <TrustedBy />
      <WhyUs />
      <Testimonials />
      <CaseStudies />
      <Industries />
      <Blog />
      <Contact />
    </React.Fragment>
  );
}
