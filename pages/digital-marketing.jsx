import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import TrustedBy from "../components/HomePage/TrustedBy";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../components/UI/Section";
import Button from "../components/UI/Button";

const digitalMarketing = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Full Spectrum Digital Marketing Services That Drive Results"}
        desc={
          <p>
            Digital Marketing is the fuel for your success. Like rocket fuel used during a rocket launching, Digital Marketing is the tool that will drive and propel your business or brand to be seen
            and known. We offer a range of services and will employ leading strategies to ensure your success.
            <br />
            <br />
            Get in touch today to receive a $2000 free audit of your website, let us help you unlock your business' potential!
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <BriefService
        tab1i={<FontAwesomeIcon icon={faRotate} color={"#002eff"} fontSize={"30px"} />}
        tab1t={"SEO"}
        tab1d={"SEO services that deliver results. With a range of services from local SEO, E-Commerce SEO to National/International services, we make sure your business thrives on the SERP."}
        tab2i={<FontAwesomeIcon icon={faMobile} color={"#002eff"} fontSize={"30px"} />}
        tab2t={"Social Media Marketing"}
        tab2d={"At Skyward we ace social media marketing! Whether it’s Facebook, Instagram, LinkedIn, Quora, or Tik Tok we can create strategies and campaigns that drive success. "}
        tab3i={<FontAwesomeIcon icon={faBoltLightning} color={"#002eff"} fontSize={"30px"} />}
        tab3t={"PPC"}
        tab3d={
          "Our power-packed PPC strategies have a proven track record of turning clicks into revenue for a sundry of industries. We have spent more than $5 M in ad spend with an average ROAS of 600% on PPC platforms like Google Ads and Microsoft ads."
        }
        tab4i={<FontAwesomeIcon icon={faGaugeSimpleHigh} color={"#002eff"} fontSize={"30px"} />}
        tab4t={"Email Marketing"}
        tab4d={"Leading strategies that will help you stand out in a cluttered inbox. We offer a range of services from email marketing to email campaign management."}
        title={"Digital Marketing Services that help you grow faster, better and smarter"}
        desc={
          <p className="subtitle">
            We are more than words, we are about numbers too. Numbers that matter to you. Digital Marketing has the ability to drive your visibility, growth and revenue. We know how to harness
            services such as SEO services, social media marketing (Facebook, Instagram, LinkedIn, Quora, Tik Tok), PPC (Google or Microsoft ads) and email marketing and transform leading strategies to
            help your business retain customers, audience and profit. Digital Marketing that drives results.
          </p>
        }
      />
      <TrustedBy />
      <Section title={"Digital Marketing that will take you to new heights"} padding={"70px 0 0"}>
        <p className="subtitle">
          Skyward helps you stand out in a universe saturated with products and businesses. Our services are here to see you forge a unique identity and space within the market. We take time to
          understand your business and goals and then propel you forward through laser-focused digital marketing strategies.
        </p>
        <Button href="/" position={'center'}>Get In Touch</Button>
      </Section>
      <Testimonials padding={"70px 0"} />
      <CaseStudies />
      <Industries />
    </React.Fragment>
  );
};

export default digitalMarketing;
