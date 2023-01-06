import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import astronaut from "../public/astronaut.png";
import FlipBox from "../components/ServicesPage/FlipBox";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ecommerceseo = () => {
  const flipboxItems = [
    {
      title: "SEO audit",
      desc: "We perform an in-depth audit of your website, your target audience and industry to understand how we can dominate keywords that have the most potential to boost your revenue. Then we carefully craft a strategy to achieve top rankings for those keywords.",
      icon: astronaut,
      href: "/wordpress",
    },
    {
      title: "Technical SEO",
      desc: "We optimise your website’s code to ensure that everything is technically sound. This includes aspects like but not limited to, your website load times, mobile friendliness, sitemap optimisations, robot txt file, broken links, schema, URL structures, and Javascript optimisation for better crawling/indexing.",
      icon: astronaut,
      href: "/shopify",
    },
    {
      title: "Conversion tracking",
      desc: "We implement the most advanced analytics methods, including e-commerce goal conversions, to attribute every transaction to the right marketing effort. Thereby maximising your ROI through a completely transparent approach.",
      icon: astronaut,
      href: "/woocommerce",
    },
    {
      title: "On Page SEO",
      desc: "We integrate your content with the right keyword clusters to ensure that Google associates your website with keywords that are the most important for your business. This process also involves optimising your meta titles, descriptions, H1s & H2s, images, videos and meta keywords. Additionally, we execute highly effective internal linking silos to give your website topical authority.",
      icon: astronaut,
      href: "/woocommerce",
    },
    {
      title: "Link building",
      desc: "We don’t build links for the sake of building links. Quality is of paramount consideration when we define a link building strategy. From citations and contextual backlinks for local businesses to manual outreach links and niche edits for enterprise projects, each link is acquired after careful deliberation to keep your website safe from running afoul of Google’s guidelines.",
      icon: astronaut,
      href: "/magento",
    },
    {
      title: "Content marketing",
      desc: "Our content strategy revolves around identifying and producing content based on topical clusters for your business or products. We then propagate this content through multiple platforms. This includes highly optimised blogs on your own website, content sharing platforms, press releases, guest blogging, infographic websites, podcasts, Google stories and more! We also build high authority links to these content properties for maximum effectiveness.",
      icon: astronaut,
      href: "/wix",
    },
  ];
  return (
    <React.Fragment>
      <ServicesBanner
        title={
          <>
            Cutting-Edge <br /> Ecommerce SEO Services To Grow Your Online Store’s Traffic & Sales
          </>
        }
        desc={
          <ul style={{ padding: "0", margin: "30px 0 40px" }}>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> Comprehensive site audit
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> Targeted keyword research for online stores
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> Content marketing through your blog and other 3rd party
              platforms
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> Ecommerce store optimisations for product pages, category pages,
              and more
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> Technical SEO (site speed, mobile optimization, schema markup,
              etc.)
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> Site structure optimisation
            </li>
            <li style={{ display: "flex", alignItems: "center", color: "#fff", fontSize: "18px", marginBottom: "15px", textAlign: "left" }}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#fece1a", borderRadius: "50%", padding: "10px", marginRight: "7px" }} /> High quality, manual link building
            </li>
          </ul>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        items={flipboxItems}
        title={"Discover How We Can Boost Your Ecommerce Sales Using SEO"}
        desc={<p className="subtitle">Our specialised eCommerce SEO solutions are tailored to help your brand outperform the competition.</p>}
      />
      <Industries background={"#EDC280"} />
      <Testimonials padding={"70px 0"} />

      <CaseStudies />
    </React.Fragment>
  );
};

export default ecommerceseo;
