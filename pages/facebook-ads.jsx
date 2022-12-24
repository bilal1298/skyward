import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Section from "../components/UI/Section";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import FlipBox from "../components/ServicesPage/FlipBox";

const flipboxItems = [
  {
    title: "Brand Awareness ads",
    desc: "When you want to build a memorable brand and measure ad recall lift.",
    icon: astronaut,
    href: "/wordpress",
  },
  {
    title: "Reach ads",
    desc: "When you want to reach as many people as possible for an event or brand launch.",
    icon: astronaut,
    href: "/shopify",
  },
  {
    title: "Traffic ads",
    desc: "When you want to drive people to a specific web page",
    icon: astronaut,
    href: "/woocommerce",
  },
  {
    title: "Engagement ads",
    desc: "When you want to increase your page followers, get more reacts on a post or increase sign ups to a Facebook event.",
    icon: astronaut,
    href: "/magento",
  },
  {
    title: "App Install ads",
    desc: "When you want people to download and engage with your app.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Video views ads",
    desc: "When you want more views on your video for multiple objectives.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Lead generation ads",
    desc: "When you want people to submit their contact details directly on Facebook.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Message ads",
    desc: "When you want people to chat or ask questions about your products or services before working with you.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Conversion ads:",
    desc: "When you want to drive traffic to your website specifically to make a purchase or signing up as a lead.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Catalog Sales ads",
    desc: "When you have a large product inventory and you want to serve ads to potential buyers based on their past interactions with your brand.",
    icon: astronaut,
    href: "/wix",
  },
  {
    title: "Store traffic ads",
    desc: "When you want people to visit your store physically and increase your footfall.",
    icon: astronaut,
    href: "/wix",
  },
];
const facebookads = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Unlock Your Business Potential With Facebook Ads"}
        desc={
          <p>
            Facebook is more than just an ad platform; it also provides you with the means to connect with current and prospective buyers at every stage of the sales process. <br />
            <br />A well-managed Facebook Advertising plan is one of the most effective and profitable strategies for expanding your brand.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <Section title={"What We Can Do For You"} padding={"70px 0"} background={"#dde3ff"}>
        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-6 text-center">
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className="col-6">
            <h3>Lead Generation</h3>
            <p>
              We work hard to get you the highest quality leads through focused ad targeting and compelling copies. We constantly test new strategies and make data driven optimisations to ensure that
              we are always squeezing out the last drop of value for your ad spend.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <h3>Retargeting</h3>
            <p>
              We start by priming your target audience with engaging ads. Then, we time our strike perfectly when they’re in “buying mode” and show them meticulously crafted ads that they just can’t
              scroll through. Moreover, our ingenious cross-platform retargeting strategies are known to convert at significantly higher rates than industry standards.
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
            <h3>Ecommerce</h3>
            <p>
              Skyward Digital’s ecommerce Facebook ads management has always been a step ahead of the competition through a process that is agile, effective and data-driven.Regardless of your niche,
              we’re committed to deliver a profitable ROI for your online store.
            </p>
          </div>
        </div>
      </Section>
      <FlipBox items={flipboxItems} title={"Types of Ads We Run"} desc={""} />
      <Testimonials padding={"0 0 70px"} />
      <CaseStudies />
    </React.Fragment>
  );
};

export default facebookads;
