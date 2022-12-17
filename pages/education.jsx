import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress, faShopify, faWooCommerce, faMagento, faWix, faReact, faLaravel, faPhp } from "@fortawesome/free-brands-svg-icons";

const ecommerce = () => {
  const flipboxItems = [
    {
      title: "WooCommerce",
      desc: "Your online store needs a seamless checkout experience. WooCommerce focuses on reducing cart abandonment with features like guest checkout to deliver a successful sale.",
      icon: faWordpress,
      href: "/wordpress",
    },
    {
      title: "Shopify",
      desc: "You can use premade themes or create your own with Shopify, so you get your unique shop. An extensive app library allows for personalised experiences to help you stand out.",
      icon: faShopify,
      href: "/shopify",
    },
    {
      title: "Wix",
      desc: "Wix can help you deliver an exceptional customer experience by keeping up-to-date with customers’ orders on the go with their store mobile app.",
      icon: faWooCommerce,
      href: "/woocommerce",
    },
    {
      title: "Magento",
      desc: "Built with eCommerce in mind, Magento allows you to set up multiple payment gateways and currencies so you can sell no matter where your customers live.",
      icon: faMagento,
      href: "/magento",
    },
    {
      title: "BigCommerce",
      desc: "BigCommerce doesn’t think you need to be a rocket scientist to get started. With a simple drag and drop, create your store, and you can launch quickly.",
      icon: faWix,
      href: "/wix",
    },
    {
      title: "Squarespace",
      desc: "Squarespace offers stunning designs to build an online store. With fast checkout times, intuitive inventory management and no product limits, you’ll be up and away in no time.",
      icon: faReact,
      href: "/react",
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Ignite Future Astronauts’ Curiosity With a Website Built for Schools and Educational Providers"}
        desc={
          <p>
            Are you an education provider looking for a website?
            <br />
            <br />
            A place where current and future students can learn more about your school, university or TAFE.
            <br />
            <br />
            Skyward Digital has helped many schools, kinders, and coaches build websites that reflect their values and the communities they serve. Your website becomes an interactive community hub.
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
        title={"Websites to power learning and marketing of schools and education organisations "}
        desc={
          <p className="subtitle">
            Your educational website should showcase your achievements and provide a snapshot of your learning with your institution. In addition, you can share information about teachers, the
            school’s curriculum, sports and specialist programs.
          </p>
        }
      />
      <FlipBox
        items={flipboxItems}
        title={"Help our brightest minds shine in the galaxy with educational websites that inspire possibilities"}
        desc={
          <p className="subtitle">
            Early learning centres, kinders, and schools can attract parents with an engaging, informational education website. And when a high school student is looking at university or TAFE,
            educational websites should highlight course outlines, campus life and career outcomes.
            <br />
            <br />
            For many, remote school learning is now consigned to the history books. But it's still essential that your website can scale and be flexible when needed. Such as posting the school's
            newsletter, information for enrollment or integrating tools to make paying schools fees effortless.
            <br />
            <br />
            And if you're a career change coach or teach new skills. Then a website for your coaching consultancy can house course content and learning resources and host an online community group.
          </p>
        }
      />
      <Testimonials padding={"0 0 70px"}/>
      <CaseStudies />
    </React.Fragment>
  );
};

export default ecommerce;
