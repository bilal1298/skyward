import React from "react";
import Banner from "../components/HomePage/Banner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import About from "../components/HomePage/About";
import TrustedBy from "../components/HomePage/TrustedBy";
import WhyUs from "../components/HomePage/WhyUs";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Blog from "../components/HomePage/Blog";
import banner from "../public/banner.png";

export default function Home() {
  return (
    <React.Fragment>
      <Banner
        title={<h1>Skyrocket Business Growth and Fuel Your Revenue</h1>}
        desc={
          <p>
            Skyward Digital is a full-service Melbourne-based digital marketing agency. Our crew of trusted flight commanders are on a mission to help businesses like yours. We find you the right
            traffic that delivers genuine leads and lands more customers.
            <br />
            <br />
            We grow your business by designing digital marketing strategies and campaigns, including search engine optimisation (SEO), social media marketing, Google Ads, social ads, web design, email
            marketing and white-label services.
            <br />
            <br />
            <strong>Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!</strong>
          </p>
        }
        heroImg={banner}
        bg={true}
      />
      <NumberStrip />
      <About />
      <TrustedBy />
      <WhyUs />
      <Testimonials padding={"0 0 70px"}/>
      <CaseStudies />
      <Industries />
      <Blog />
    </React.Fragment>
  );
}
