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
        title={"Simple eCommerce websites ready for lift-off and fire up your growth"}
        desc={
          <p>
            Your eCommerce website has only one goal: to make sales. <br />
            <br />
            At Skyward Digital, our experts build your eCommerce website, so your customers move quickly to checkout through UX-focused design.
            <br />
            <br />
            Understanding buyer behaviour and their journey with your business are crucial to designing your online store. Our end-to-end eCommerce websites focus on optimising for speed and are
            SEO-friendly to deliver results.
            <br />
            <br />
            We build eCommerce websites that include multiple payment options, straightforward inventory management, convenient shipping options and effortless navigation.
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
        title={"Focused on intuitive design with a simple and fast shopping experience"}
        desc={
          <p className="subtitle">
            Your eCommerce store could be an extension of your existing bricks and mortar shop or exist only online. Either way, creating a delightful and seamless experience focused on your
            customer’s needs will generate revenue and repeat visits.
          </p>
        }
      />
      <FlipBox
        items={flipboxItems}
        title={"All the eCommerce platforms in the galaxy to launch your next mission online"}
        desc={
          <p className="subtitle">
            Choosing the right solution for your eCommerce website doesn’t need to be Overwhelming.
            <br />
            <br />
            Do you need to keep up-to-date with customer orders on the go? Or is creating a personal online experience more meaningful? Need a custom theme or premade one?
            <br />
            <br />
            With Skyward Digital, we will assess your business goals and review any existing website you have. Then, after learning all we need during the briefing (the battle plan), we start building
            your robust and optimised website.
          </p>
        }
      />
      <Testimonials padding={"0 0 70px"}/>
      <CaseStudies />
    </React.Fragment>
  );
};

export default ecommerce;
