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

const nationalseo = () => {
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
        title={"Harness the Power of SEO and Increase Your Brand Equity Across the Globe"}
        desc={
          <p>
            As businesses expand, so does their physical and virtual presence. This includes providing products and services in many cities, states, and countries, as well as the languages spoken in
            those places. <br />
            <br />
            We specialise in multiregional and multilingual SEO strategies, allowing our clients to deliver engaging experiences for their target audience regardless of location or language.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        items={flipboxItems}
        title={"Let’s Work Together To Grow Your Business"}
        desc={
          <p className="subtitle">
            Take the guesswork out of enterprise SEO with our legit team of global SEO scientists. You can trust us with your SEO results and get back to running your business. Here’s a glimpse into
            what our national/international SEO services include:
          </p>
        }
      />
      <Industries background={'#fff'}/>
      <Testimonials padding={"70px 0"} />
      <Section title={"A Deep Dive Into Our Global SEO Process"} padding={"70px 0"} background={"#dde3ff"}>
        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-6 text-center">
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className="col-6">
            <h3 className="sbsTitle">Identify most profitable markets</h3>
            <p>We start with an evaluation of your current business and target market to figure out which countries you should focus more on.</p>
            <br />
            <h3 className="sbsTitle">Strategy formulation</h3>
            <p>Once we’ve determined the countries likely to yield the most success, we’ll create a go-to-market strategy, which will outline how we plan to launch our strategy.</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <h3 className="sbsTitle">ROI forecasting</h3>
            <p>
              Once we’ve drawn up a comprehensive strategy, we'll use your current marketing plan and market research to figure out which channels will make you the most money. Next, it’s time to
              launch internationally. To do that, we’ll put together a complete market launch strategy to ensure the launch is promoted and your products or services reach its intended audience.
            </p>
            <br />
            <h3 className="sbsTitle">Market launch</h3>
            <p>
              Next, it’s time to launch internationally. To do that, we’ll put together a complete market launch strategy to ensure the launch is promoted and your products or services reach its
              intended audience.
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
            <h3 className="sbsTitle">Channel-wise analysis</h3>
            <p>
              After the campaign is live, we will collect and analyse data to determine the cost per acquisition (total cost/amount of new customers acquired by channel). Then, we will be able to form
              a strategy going forward based on the channels that have proven to be most profitable.
            </p>
            <br />
            <h3 className="sbsTitle">Scaling up globally</h3>
            <p>Once the first campaign is up and running, we'll work harder and expand our campaigns to more countries.</p>
          </div>
        </div>
      </Section>
      <CaseStudies />
    </React.Fragment>
  );
};

export default nationalseo;
