import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Industries from "../components/HomePage/Industries";
import Section from "../components/UI/Section";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import FlipBox from "../components/ServicesPage/FlipBox";

const seo = () => {
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
        title={"Strengthen Your Organic Presence With A ROI-Driven SEO Agency"}
        desc={
          <p>
            Skyward specialises in delivering top positions on the SERP across highly competitive industries. Our proven SEO strategies lead to increased organic traffic and ultimately more revenue.
            We also guarantee results, and our crew of SEO rockstars is dedicated to delivering the best ROI for our clients
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <Section title={"A SEO game plan to get you to the top"} padding={"70px 0"} background={"#dde3ff"}>
        <p className="subtitle">
          People who use Google or Bing to look for businesses rarely scroll past page 2 of Google’s Search Engine Results Page. The coveted first ranking requires more than luck. It requires SEO
          genius. We have that genius and offer services such as Local SEO, E-Commerce SEO and National/International SEO. From on-page SEO and off-page SEO to technical SEO and link building, our
          team will equip you with a holistic and unique SEO strategy to get you ahead of your competitors.
        </p>
        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-6 text-center">
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className="col-6">
            <h3 className="sbsTitle">Local SEO</h3>
            <p>
              Local SEO: Improve hyper-targeted traffic and acquire new customers with a local SEO campaign. Ideal for local businesses. Google Business Profile optimisation, citation building,
              content marketing, and link building.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <h3 className="sbsTitle">E-commerce SEO</h3>
            <p>
              Our ecommerce SEO strategy is laser-focused on increasing your sales through technical enhancements, structured data markups, ongoing content strategy and our proprietary link building
              tactics.
            </p>
          </div>
          <div className="col-6 text-center">
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6 text-center">
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className="col-6">
            <h3 className="sbsTitle">National/International SEO</h3>
            <p>We specialise in multiregional and multilingual SEO strategies, allowing our clients to deliver engaging experiences for their target audience regardless of location or language.</p>
          </div>
        </div>
      </Section>
      <FlipBox items={flipboxItems} title={"Our Process"} desc={""} />
      <Industries />
      <Testimonials padding={"0 0 70px"} />
      <CaseStudies />
    </React.Fragment>
  );
};

export default seo;
