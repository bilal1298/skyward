import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import BriefService from "../components/ServicesPage/BriefService";
import TypesOfWeb from "../components/ServicesPage/TypesOfWeb";
import TrustedBy from "../components/HomePage/TrustedBy";
import FlipBox from "../components/ServicesPage/FlipBox";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import { faRotate, faBoltLightning, faMobile, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress, faShopify, faWooCommerce, faMagento, faWix, faReact, faLaravel, faPhp } from "@fortawesome/free-brands-svg-icons";

const websitedesign = () => {
  const flipboxItems = [
    {
      title: "Wordpress",
      desc: "WordPress powers 43% of websites globally. Its CMS quickly allows you to create and update content. And with thousands of unique themes, you'll soon be soaring.",
      icon: faWordpress,
      href: "/wordpress",
    },
    {
      title: "Shopify",
      desc: "With Shopify's low costs and user-friendly platform, you can start selling online quickly. And Shopify effortlessly integrates with your store, other marketplaces and social media.",
      icon: faShopify,
      href: "/shopify",
    },
    {
      title: "Woocommerce",
      desc: "99% of all WordPress stores are run by WooCommerce. It’s great for beginners setting up eCommerce on their website as it’s easy to use and flexible",
      icon: faWooCommerce,
      href: "/woocommerce",
    },
    {
      title: "Magento",
      desc: "Magento offers multicurrency and multilingual eCommerce websites. From local traders to large companies, Magento enables design flexibility to create the perfect digital customer experience.",
      icon: faMagento,
      href: "/magento",
    },
    {
      title: "Wix",
      desc: "Wix is a flexible, custom website builder. With attractive and adaptable designs, Wix offers a range of tools you can add, like SEO, eCommerce and email marketing.",
      icon: faWix,
      href: "/wix",
    },
    {
      title: "React",
      desc: "If you need a quick and scalable website or app, then ReactJS can help. React excels at delivering exceptional interactive experiences for mobile and native apps.",
      icon: faReact,
      href: "/react",
    },
    {
      title: "Laravel",
      desc: "Laravel helps enterprises build large and robust applications. It includes powerful security features and is diverse enough to make bespoke architecture and functionality.",
      icon: faLaravel,
      href: "/laravel",
    },
    {
      title: "Php",
      desc: "Need a website delivering lightyears fast speed? Then PHP gives you limitless possibilities to build and scale a dynamic website for Windows, Mac and Linux.",
      icon: faPhp,
      href: "/php",
    },
  ];
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
      <FlipBox
        items={flipboxItems}
        title={"Skilled website scientists who engineer websites with WordPress, Shopify, Wix and others in the fleet"}
        desc={
          <p class="subtitle">
            Skyward Digital offers fully customisable websites on various platforms. Do you know what’s right for you?
            <br />
            <br />
            We specialise in WordPress, Shopify, WooCommerce, Wix, Magento, React, Laravel and PHP to build your next high-converting website. We are your digital marketing partner to understand your
            goals and digital strategy to create a website that skyrockets results.
            <br />
            <br />
            Skyward Digital builds your website to create a rich and deep customer experience. That way, Google knows your site is engaging and valuable, helping you to rank higher.
          </p>
        }
      />
      <Testimonials padding={"0 0 70px"}/>
      <CaseStudies />
    </React.Fragment>
  );
};

export default websitedesign;
