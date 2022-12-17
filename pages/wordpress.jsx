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

const wordpress = () => {
  const flipboxItems = [
    {
      title: "Custom WordPress Website Development ",
      desc: "Tweak, change and customise your website to achieve the user experience you want to deliver. It’s an efficient and cost-effective way to build a unique website.",
      icon: faWordpress,
      href: "/wordpress",
    },
    {
      title: "Theme Development",
      desc: "Building a custom theme means lighting speeds to rank higher and boost traffic. In addition, your website has better security than off-shelf themes, which are frequent hacking targets.",
      icon: faShopify,
      href: "/shopify",
    },
    {
      title: "WooCommerce Development",
      desc: "You can easily and quickly reach your social media audience with WooCommerce. It’s simple to share new products and content, gliding them to your online store in one click.",
      icon: faWooCommerce,
      href: "/woocommerce",
    },
    {
      title: "WP Plugin Development",
      desc: "Give your WordPress site a rocket boost in performance with custom plug-ins. Avoid costly mistakes with sluggish performance and poor UX resulting in customers clicking off.",
      icon: faMagento,
      href: "/magento",
    },
    {
      title: "Blog Development",
      desc: "Showcase your experience and position your business as an authority with blogging. WP provides excellent flexibility, ease of use, and SEO to get found in search.",
      icon: faWix,
      href: "/wix",
    },
    {
      title: "API Integration",
      desc: "It opens up new galaxies to explore for your business. Such as creating a native mobile app or communicating with other apps universally.",
      icon: faReact,
      href: "/react",
    },
  ];
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
      <FlipBox
        items={flipboxItems}
        title={"Tinker, Swap, and Modify Your WordPress Website To Build Your Mothership"}
        desc={
          <p className="subtitle">
            Customising your WordPress website allows you to present your business online uniquely. For example, you may want to change your theme to improve site speed. Or you want to grow organic
            traffic but need some support around setting up your blog. <br />
            <br />
            Our WordPress development services can help your business supercharge your website to grow revenue and boost your brand.
          </p>
        }
      />
      <Testimonials padding={"0 0 70px"}/>
      <CaseStudies />
    </React.Fragment>
  );
};

export default wordpress;
