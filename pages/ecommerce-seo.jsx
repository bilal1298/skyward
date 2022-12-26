import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import TrustedBy from "../components/HomePage/TrustedBy";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import Button from "../components/UI/Button";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import FlipBox from "../components/ServicesPage/FlipBox";

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
        title={"Cutting-Edge Ecommerce SEO Services To Grow Your Online Store’s Traffic & Sales"}
        desc={
          <p>
            ✓ Comprehensive site audit <br />
            ✓ Targeted keyword research for online stores <br />
            ✓ Content marketing through your blog and other 3rd party platforms <br />
            ✓ Ecommerce store optimisations for product pages, category pages, and more <br />
            ✓ Technical SEO (site speed, mobile optimization, schema markup, etc.) <br />
            ✓ Site structure optimisation <br />
            ✓ High quality, manual link building <br />
          </p>
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
      <Industries />
      <Testimonials padding={"0 0 70px"} />
      
      <CaseStudies />
    </React.Fragment>
  );
};

export default ecommerceseo;