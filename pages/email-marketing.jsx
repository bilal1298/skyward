import React from "react";
import ServicesBanner from "../components/ServicesPage/ServicesBanner";
import NumberStrip from "../components/ServicesPage/NumberStrip";
import Testimonials from "../components/HomePage/Testimonials";
import CaseStudies from "../components/HomePage/CaseStudies";
import Section from "../components/UI/Section";
import astronaut from "../public/astronaut.png";
import Image from "next/image";
import FlipBox from "../components/ServicesPage/FlipBox";
import mailchimp from "../public/mailchimp.png";
import braze from "../public/braze.png";
import marketo from "../public/marketo.png";
import klaviyo from "../public/klaviyo.png";
import sfmc from "../public/sfmc.png";
import hubspot from "../public/HubSpot.png";
import classes from "../styles/pages.module.css";

const flipboxItems = [
  {
    title: "Database scraping",
    desc: "We provide an easy process to automate the collection of data, such as email addresses, and convert such information into easy access for your business. ",
    icon: astronaut,
    href: "/wordpress",
  },
  {
    title: "Email template design",
    desc: "Whether you have a design you need to be coded or need us to construct and code a fresh design, we build attractive, user-friendly templates.",
    icon: astronaut,
    href: "/shopify",
  },
  {
    title: "Email Campaign Management",
    desc: "Take the load off your shoulders. Our email campaign management encompasses the scheduling, reporting and execution of your campaign. We are there from start to finish.",
    icon: astronaut,
    href: "/woocommerce",
  },
  {
    title: "Email operations support",
    desc: "Skyward is here to help you with every step of your journey with email operations support such as scheduling, production, reporting, delivery, analysis and execution.",
    icon: astronaut,
    href: "/magento",
  },
];
const emailmarketing = () => {
  return (
    <React.Fragment>
      <ServicesBanner
        title={"Full-Service Email Marketing Agency That Offers Result-Driven Email Services"}
        desc={
          <p>
            We provide successful email marketing services that will convert to results. Our strategy involves achieving your email marketing goals through interactive email templates, behaviour-based
            automation, and audience segmentation to convert emails to your desired outcome.
          </p>
        }
        link={"/"}
        button={"Get In Touch"}
      />
      <NumberStrip />
      <FlipBox
        items={flipboxItems}
        title={"Stand out in a cluttered inbox"}
        desc={
          <p className="subtitle">
            Email Marketing takes trusted strategies to deliver results. Our range of services includes database scraping, email template design, email campaign management, and email operations
            support. Here at Skyward, we get it. Mere visibility is not enough. We want to see you increase your revenue, growth, subscribers or loyal paying customers.
          </p>
        }
      />

      <Section title={"Custom email templates compatible with 40+ email clients, including:"} padding={"70px 0"} background={"#dde3ff"}>
        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image style={{ width: "50%" }} src={mailchimp} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={braze} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={marketo} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={klaviyo} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={sfmc} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className={classes.imageContainer}>
              <Image src={hubspot} alt="" />
            </div>
          </div>
        </div>
      </Section>
      <Testimonials padding={"70px 0"} />
    </React.Fragment>
  );
};

export default emailmarketing;
