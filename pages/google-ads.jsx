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
    title: "Agency You Can Trust",
    desc: "Leave the details and execution to us. We’ll always keep you posted with transparent reporting.",
    icon: astronaut,
    href: "/wordpress",
  },
  {
    title: "Unique Process",
    desc: "We’re constantly testing new strategies to best our previous numbers. As a result, we’re always scaling up your ads and never taking the back seat.",
    icon: astronaut,
    href: "/shopify",
  },
  {
    title: "Google Ads Setup",
    desc: "We handle the entire setup, from account setup, tracking, copies, and landing page designs, so you don’t have to worry about any of the technical stuff.",
    icon: astronaut,
    href: "/woocommerce",
  },
  {
    title: "Support",
    desc: "We’re just a tap away. With our Google Ads certified success managers and our after hours support team, you and your campaigns are never left unattended.",
    icon: astronaut,
    href: "/magento",
  },
];
const googleads = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Discover Your True Growth Potential on Google"}
        desc={
          <p>
            Google search advertising is a highly effective form of pull marketing. This means that your audience already has an intent to buy or procure a product or service. Our Google ads certified
            experts rank your ads on top positions to send ultra-targeted audiences to your website on a daily basis. Work with a team that has a proven track record of delivering a 600% return on ad
            spend on average in the past year.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        items={flipboxItems}
        title={"Why Skyward Digital?"}
        desc={<p className="subtitle">Take your Google advertising ROI to the next level with comprehensive paid search growth strategies and superior management.</p>}
      />

      <Section title={"Our Process"} padding={"70px 0"} background={"#dde3ff"}>
        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-6 text-center">
            <Image src={astronaut} alt="" style={{ width: "60%" }} />
          </div>
          <div className="col-6">
            <h3>Identify Goals</h3>
            <p>Everything we do is focused on maximising your ROI. We identify goals, evaluate historical data, and create a clear plan during our initial evaluation.</p>
            <br />
            <h3>Setup Tracking</h3>
            <p>All of our PPC marketing staff is Google Ads and Google Analytics certified. We can integrate simple to advanced tracking options for any clients, regardless of their tech stack.</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <h3>Define Keywords & Targeting</h3>
            <p>
              You can burn hundreds of thousands of dollars every year if you don't use the appropriate keywords and targeting. When approaching new clients, we frequently find that deleting subpar
              ads and keywords more than pays for our fees. In many cases, we either refine their account or create a new one from scratch.
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
            <h3>Create Ad Copies</h3>
            <p>Because you are only as good as your copy and creative, we ensure that your copy is best-in-class by putting our experience, data analysis, and testing abilities to full use.</p>
            <br />
            <h3>Landing Page Optimisation</h3>
            <p>We use our unique and proven CRO methods to maximise conversion rates on your website’s advertising landing pages.</p>
          </div>
        </div>
      </Section>
      <Testimonials padding={"70px 0"} />
      <CaseStudies />
    </React.Fragment>
  );
};

export default googleads;
